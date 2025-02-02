import { Routes } from '@angular/router';

export default[
  {
    path: '',
    title:'Reservations',
    loadComponent: () =>
      import('./reservations/reservations.page'),
  },
  {
    path: 'me',
    pathMatch:'full',
    title: 'Mis reservaciones',
    loadComponent: () =>
      import('./my-reservations/my-reservations.page')
  },
  {
    path: 'create/:id',
    pathMatch:'full',
    title: 'Crear reservación',
    loadComponent: () =>
      import('./create-reservation/create-reservation.page')
  },
  {
    path: ':id',
    title: 'Detalle de Reserva',
    loadComponent: () =>
      import('./one-reservation/one-reservation.page')
  },
] as Routes;
