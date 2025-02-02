import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Bienvenida',
    loadChildren: () =>
      import('./public/public.routes').then((m) => m.PUBLIC_ROUTES),
  },
  {
    path: 'dashboard',
    title: 'Dashboard',
    loadChildren: () =>
      import('./private/private.routes').then((m) => m.PRIVATE_ROUTES),
  },
  {
    path: '**',
    title:"Página no encontrada",
    loadComponent: () =>
      import('./shared/pages/page-not-found/page-not-found.page')
  },
];
