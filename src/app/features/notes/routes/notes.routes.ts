import { Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'note/:id',
        loadComponent: () => import('../pages/note-detail/note-detail')
      },
      {
        path:'create',
        loadComponent:()=>import('../pages/create-note/create-note')
      },
    ]
  }
]

export default routes
