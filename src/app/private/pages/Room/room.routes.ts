import { Routes } from '@angular/router';

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
    loadComponent: () =>
      import('./create-room/create-room.page')
  },
  {
    path: 'edit/:id',
    pathMatch:'full',
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
