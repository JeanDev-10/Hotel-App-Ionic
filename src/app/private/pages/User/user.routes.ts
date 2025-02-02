import { Routes } from '@angular/router';

export default [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'me',
  },
  {
    path: 'me',
    pathMatch: 'full',
    title: 'Mi perfil',
    loadComponent: () => import('./my-profile/my-profile.page'),
  },
  {
    path: ':id',
    title: 'Perfil de un Usuario',
    loadComponent: () => import('./get-user/get-user.page'),
  },
] as Routes;
