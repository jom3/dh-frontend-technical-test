import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrandLogo } from '../../../../shared/components/brand-logo/brand-logo';
import { Router, RouterLink } from '@angular/router';
import { Auth } from '../../service/auth';
import { Jwt } from '../../../../core/services/jwt';

@Component({
  selector: 'app-login',
  imports: [BrandLogo, RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export default class Login {

  private readonly fb = inject(FormBuilder);
  private readonly authSvc = inject(Auth);
  private readonly jwtSvc = inject(Jwt)
  private readonly router = inject(Router);

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
    this.authSvc.login({ email, password }).subscribe({
      next: (r) => {
        this.jwtSvc.setToken(r.token)
        this.router.navigate([''])
      },
      error: (err) => {
        alert(err.message || 'Error desconocido')
      },
    });
  }

  hasError(controlName: string, error: string): boolean {
    const control = this.loginForm.get(controlName);
    return !!(control && control.hasError(error) && (control.touched || control.dirty));
  }

}
