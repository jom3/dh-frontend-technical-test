import { Component, inject } from '@angular/core';
import { BrandLogo } from "../../../../shared/components/brand-logo/brand-logo";
import { Router, RouterLink } from '@angular/router';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterUser } from '../../service/register-user';
import { Auth } from '../../service/auth';
import { RegisterResponse } from '../../models/register-response';

@Component({
  selector: 'app-register',
  imports: [BrandLogo, RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export default class Register {

  private readonly fb = inject(FormBuilder);
  private readonly authSvc = inject(Auth)
  private readonly router = inject(Router)

  registerForm = this.fb.group({
    email: this.fb.nonNullable.control('', [Validators.email, Validators.required]),
    password: this.fb.nonNullable.control('', [Validators.required, Validators.minLength(8)])
  });

  onRegisterSubmit() {
    if (!this.registerForm.valid) {
      this.registerForm.markAllAsTouched()
      return
    }
    const userData = this.registerForm.getRawValue()
    this.authSvc.register(userData).subscribe({
      next:(r)=>{
        this.router.navigate(['/auth/login'])
        console.log(r.message);
      },
      error:e=>console.log(e)
    })
  }

  hasError(controlName: string, error: string): boolean {
    const control = this.registerForm.get(controlName);
    return !!(control && control.hasError(error) && (control.touched || control.dirty));
  }
}
