import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NotesSocketService } from '../../services/notes-socket.service';
import { Jwt } from '../../../../core/services/jwt';

@Component({
  selector: 'app-create-note',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-note.html',
  styleUrl: './create-note.css'
})
export default class CreateNote {

  private readonly fb = inject(FormBuilder)
  private readonly notesSocketSvc = inject(NotesSocketService)
  private readonly jwtSvc = inject(Jwt)

  currentUser = signal<string>(this.jwtSvc.getCurrentUser() as string)

  lastEdited = 'Not yet saved';

  noteForm = this.fb.group({
    title: ['', Validators.required],
    content: ['', Validators.required],
    tags: [''],
    createdById: [this.currentUser(), Validators.required],
  });

  onSubmit() {
    if (this.noteForm.valid) {
      const raw = this.noteForm.value;

      const payload = {
        title: raw.title ?? '',
        content: raw.content ?? '',
        createdById: raw.createdById ?? '',
        tags: raw.tags ? raw.tags.split(',').map((t: string) => t.trim()) : []
      };

      this.notesSocketSvc.createNote(payload);

      this.noteForm.reset({
        createdById: this.currentUser()
      });

      this.lastEdited = 'Not yet saved';
    } else {
      this.noteForm.markAllAsTouched();
    }
  }


  handleChange() {
    if (this.lastEdited === 'Not yet saved') {
      this.lastEdited = 'Editing...';
    }
  }

  handleCancel() {
    this.noteForm.reset();
    this.lastEdited = 'Not yet saved';
  }
}
