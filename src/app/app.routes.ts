import { Routes } from '@angular/router';
import { HomeLayout } from './layouts/home-layout/home-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

export const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayout,
    loadChildren: () => import('./features/auth/routes/auth.routes'),
  },
  {
    path: '**',
    redirectTo: '/auth/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeLayout,
    children: [
      // aquí los hijos del home
    ]
  },
];
