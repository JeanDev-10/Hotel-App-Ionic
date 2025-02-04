import { Routes } from '@angular/router';
import { hasRoleGuard } from 'src/app/core/guards/hasRole.guard';
import { RolesEnum } from 'src/app/core/utils/Roles.enum';

export default[
  {
    path: '',
    title:'Rooms',
    loadComponent: () =>
      import('./rooms/rooms.page'),
  },
  {
    path: 'create',
    pathMatch:'full',
    title: 'Crear Habitación',
    canActivate:[hasRoleGuard(RolesEnum.ADMIN)],
    loadComponent: () =>
      import('./create-room/create-room.page')
  },
  {
    path: 'edit/:id',
    pathMatch:'full',
    canActivate:[hasRoleGuard(RolesEnum.ADMIN)],
    title: 'Editar Habitación',
    loadComponent: () =>
      import('./edit-room/edit-room.page')
  },
  {
    path: ':id',
    pathMatch:'full',
    title: 'Detalle de Habitación',
    loadComponent: () =>
      import('./one-room/one-room.page')

  },
] as Routes;
