import { Routes } from '@angular/router';
import { HomeLayout } from './layouts/home-layout/home-layout';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/auth/routes/auth.routes'),
  },
  {
    path:'',
    component:HomeLayout,
    children:[
      //aqui sus hijos
    ]
  }
];
