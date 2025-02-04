import { add } from 'ionicons/icons';
import { Routes } from '@angular/router';
import { hasRoleGuard } from 'src/app/core/guards/hasRole.guard';
import { RolesEnum } from 'src/app/core/utils/Roles.enum';

export default [
  {
    path: '',
    title: 'Reservations',
    canActivate: [hasRoleGuard(RolesEnum.ADMIN)],
    loadComponent: () => import('./reservations/reservations.page'),
  },
  {
    path: 'me',
    pathMatch: 'full',
    canActivate: [hasRoleGuard(RolesEnum.USER)],
    title: 'Mis reservaciones',
    loadComponent: () => import('./my-reservations/my-reservations.page'),
  },
  {
    path: 'create/:id',
    pathMatch: 'full',
    title: 'Crear reservación',
    canActivate: [hasRoleGuard(RolesEnum.USER)],
    loadComponent: () => import('./create-reservation/create-reservation.page'),
  },
  {
    path: ':id',
    title: 'Detalle de Reserva',
    loadComponent: () => import('./one-reservation/one-reservation.page'),
  },
] as Routes;
