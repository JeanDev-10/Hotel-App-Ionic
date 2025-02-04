import { Routes } from '@angular/router';
import { hasRoleGuard } from 'src/app/core/guards/hasRole.guard';
import { RolesEnum } from 'src/app/core/utils/Roles.enum';

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
    canActivate: [hasRoleGuard(RolesEnum.ADMIN)],

    title: 'Perfil de un Usuario',
    loadComponent: () => import('./get-user/get-user.page'),
  },
] as Routes;
