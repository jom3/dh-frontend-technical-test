import { Routes } from '@angular/router';
import { HomeLayout } from './layouts/home-layout/home-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';
import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayout,
    loadChildren: () => import('./features/auth/routes/auth.routes'),
  },
  {
    path: '',
    component: HomeLayout,
    canActivate: [authGuard],
    loadChildren:()=>import('./features/notes/routes/notes.routes')
  },
  {
    path: '**',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
];
