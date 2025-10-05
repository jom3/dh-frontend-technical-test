import { Component } from '@angular/core';
import { BrandLogo } from '../../../../shared/components/brand-logo/brand-logo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [BrandLogo, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export default class Login {

}
