import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandLogo } from '../../../../shared/components/brand-logo/brand-logo';
import { RouterLink } from '@angular/router';
import { Auth } from '../../service/auth';

@Component({
  selector: 'app-login',
  imports: [BrandLogo, RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export default class Login {

  private readonly fb = inject(FormBuilder);
  private readonly authSvc = inject(Auth)

  loginForm = this.fb.group({
    email: this.fb.nonNullable.control('', [Validators.email, Validators.required]),
    password: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(8)])
  });

  onLoginSubmit() {
    if (!this.loginForm.valid) {
      this.loginForm.markAllAsTouched()
      return
    }
    const { email, password } = this.loginForm.getRawValue()
    console.log(this.authSvc.login({email, password}))
  }

  hasError(controlName: string, error: string): boolean {
    const control = this.loginForm.get(controlName);
    return !!(control && control.hasError(error) && (control.touched || control.dirty));
  }

}
