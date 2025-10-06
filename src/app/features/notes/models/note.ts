import { Tag } from './tag';

export interface Note {
  id:          number;
  title:       string;
  content:     string;
  createdAt:   Date;
  updatedAt:   Date;
  archived:    boolean;
  createdById: string;
  updatedById: null;
  tags:        TagElement[];
}

export interface TagElement {
  noteId: number;
  tagId:  number;
  tag:    Tag;
}
