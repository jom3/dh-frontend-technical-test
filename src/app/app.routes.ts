import { Routes } from '@angular/router';
import { HomeLayout } from './layouts/home-layout/home-layout';
import { AuthLayout } from './layouts/auth-layout/auth-layout';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayout,
    loadChildren: () => import('./features/auth/routes/auth.routes'),
  },
  {
    path: '',
    component: HomeLayout,
    children: [
      //aqui sus hijos
    ]
  }
];
