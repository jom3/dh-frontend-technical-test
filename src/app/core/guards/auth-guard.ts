import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Jwt } from '../services/jwt';

export const authGuard: CanActivateFn = (route, state) => {
  const jwtSvc = inject(Jwt)
  const router = inject(Router)
  if (!jwtSvc.isAuthenticated()) {
    router.navigate(['/auth/login'])
    return false;
  }
  return true
};
