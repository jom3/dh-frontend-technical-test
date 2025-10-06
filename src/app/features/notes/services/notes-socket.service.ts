import { Component, inject, Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import { CustomMessage } from '../../../shared/components/custom-message/custom-message';

@Injectable({ providedIn: 'root' })
export class NotesSocketService {
  private socket: Socket;

  private _snackBar = inject(MatSnackBar);

  constructor() {
    this.socket = io('http://localhost:3000');
  }

  getAllNotes() {
    this.socket.emit('notes:getAll');
  }

  onNotesList(): Observable<any[]> {
    return new Observable((subscriber) => {
      this.socket.on('notes:list', (data) => subscriber.next(data));
    });
  }

  getAllTags() {
    this.socket.emit('notes:getAllTags');
  }

  onTagList(): Observable<any[]> {
    return new Observable((subscriber) => {
      this.socket.on('tags:list', (data) => subscriber.next(data));
    });
  }

  createNote(note: { title: string; content: string; createdById: string; tags?: string[] }) {
    this.openSnackBar()
    this.socket.emit('notes:create', note);
  }

  onNoteCreated(): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on('notes:created', (note) => subscriber.next(note));
    });
  }

  updateNote(note: { id: number; title?: string; content?: string; updatedById: string; tags?: string[] }) {
    this.socket.emit('notes:update', note);
  }

  onNoteUpdated(): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on('notes:updated', (note) => subscriber.next(note));
    });
  }

  removeNote(id: number) {
    this.socket.emit('notes:remove', id);
  }

  onNoteRemoved(): Observable<number> {
    return new Observable((subscriber) => {
      this.socket.on('notes:removed', (id) => subscriber.next(id));
    });
  }

  archiveNote(id: number) {
    this.socket.emit('notes:archive', id);
  }

  onNoteArchived(): Observable<any> {
    return new Observable((subscriber) => {
      this.socket.on('notes:archived', (note) => subscriber.next(note));
    });
  }

  durationInSeconds = 5;

  openSnackBar() {
    this._snackBar.openFromComponent(CustomMessage, {
      duration: this.durationInSeconds * 1000,
    });
  }
}
