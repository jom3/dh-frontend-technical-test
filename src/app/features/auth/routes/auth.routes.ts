import { Routes } from "@angular/router";

const routes:Routes = [
  {
    path:'',
    children:[
      {
        path:'login',
        loadComponent:()=>import('../pages/login/login')
      },
      {
        path:'register',
        loadComponent:()=>import('../pages/register/register')
      }
    ]
  }
]

export default routes
