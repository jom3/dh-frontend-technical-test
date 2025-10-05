import { Component } from '@angular/core';
import { BrandLogo } from "../../../../shared/components/brand-logo/brand-logo";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [BrandLogo, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export default class Register {

}
