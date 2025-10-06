import { Component, input } from '@angular/core';
import { Tag } from '../../../../features/notes/models/tag';

@Component({
  selector: 'tags-card-item',
  imports: [],
  templateUrl: './tags-card-item.html',
  styleUrl: './tags-card-item.css'
})
export class TagsCardItem {
  tag = input.required<Tag>()
}
