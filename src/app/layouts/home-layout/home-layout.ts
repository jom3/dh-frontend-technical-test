import { Component, inject, signal } from '@angular/core';
import { Sidebar } from '../../shared/components/sidebar/sidebar/sidebar';
import { Header } from "../../shared/components/layouts/header/header";
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CustomItemButton } from "../../shared/components/sidebar/custom-item-button/custom-item-button";
import { NotesSocketService } from '../../features/notes/services/notes-socket.service';
import { Note } from '../../features/notes/models/note';
import { Jwt } from '../../core/services/jwt';
import { getCurrentDate } from '../../shared/utils/getCurrentDate';

@Component({
  selector: 'app-home-layout',
  imports: [Sidebar, Header,RouterLink, RouterOutlet, CustomItemButton],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.css'
})
export class HomeLayout {

  private readonly route = inject(Router)
  private readonly notesSocketSvc = inject(NotesSocketService)
  private readonly jwtSvc = inject(Jwt)

  currentRoute = signal<string>(this.route.url)
  notes = signal<Note[]>([])

  ngOnInit(): void {
    this.notesSocketSvc.getAllNotes();
    this.notesSocketSvc.onNotesList().subscribe((tags)=>{
      const allNotes = tags.filter((t:Note)=>t.createdById===this.jwtSvc.getCurrentUser())
      this.notes.set(allNotes)
    })


  }

  getCurrentDate(date:Date){
    return getCurrentDate(date)
  }

}
