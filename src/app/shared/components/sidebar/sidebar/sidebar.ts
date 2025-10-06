import { Component } from '@angular/core';
import { BrandLogo } from "../../brand-logo/brand-logo";
import { CustomItemButton } from '../custom-item-button/custom-item-button';
import { TagsList } from '../tags-list/tags-list';

@Component({
  selector: 'sidebar',
  imports: [BrandLogo, CustomItemButton, TagsList],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css'
})
export class Sidebar {

}
