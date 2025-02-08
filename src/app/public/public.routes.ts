import { Routes } from '@angular/router';
import { NoAuthGuard } from '../core/guards/notLogged.guard';

export const PUBLIC_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/welcome/welcome.page')
  },
  {
    path: 'auth',
    canActivate:[NoAuthGuard],
    loadChildren: () =>
      import('../auth/auth.routes')
  },
];
