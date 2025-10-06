import { Component, signal } from '@angular/core';
import { Note } from '../../models/note';

@Component({
  selector: 'app-note-detail',
  imports: [],
  templateUrl: './note-detail.html',
  styleUrl: './note-detail.css'
})
export default class NoteDetail {
  // note = signal<Note | null>(null)
}
