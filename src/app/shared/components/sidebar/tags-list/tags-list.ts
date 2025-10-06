import { Component, inject, signal } from '@angular/core';
import { TagsCardItem } from "../tags-card-item/tags-card-item";
import { Tag } from '../../../../features/notes/models/tag';
import { NotesSocketService } from '../../../../features/notes/services/notes-socket.service';

@Component({
  selector: 'tags-list',
  imports: [TagsCardItem],
  templateUrl: './tags-list.html',
  styleUrl: './tags-list.css'
})
export class TagsList {
  tags = signal<Tag[]>([])

  private readonly notesSocketSvc = inject(NotesSocketService)

  ngOnInit(): void {
    this.notesSocketSvc.getAllTags();
    this.notesSocketSvc.onTagList().subscribe((tags)=>{
      this.tags.set(tags)
    })
  }
}
