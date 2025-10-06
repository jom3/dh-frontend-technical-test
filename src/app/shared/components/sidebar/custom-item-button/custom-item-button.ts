import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'custom-item-button',
  imports: [NgClass],
  templateUrl: './custom-item-button.html',
  styleUrl: './custom-item-button.css'
})
export class CustomItemButton {
  icon = input.required<string>()
  title = input.required<string>()
  secondIcon = input<boolean>(false)
  hasBorder = input<boolean>(false)
}
