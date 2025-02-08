import { Routes } from '@angular/router';
import { hasRoleGuard } from 'src/app/core/guards/hasRole.guard';
import { RolesEnum } from 'src/app/core/utils/Roles.enum';
import { OneRoomResolver } from 'src/app/core/resolvers/room/OneRoom.resolver';
import { ReservationsResolver } from 'src/app/core/resolvers/reservation/Reservations.resolver';
import { MyReservationsResolver } from 'src/app/core/resolvers/reservation/MyReservations.resolver';
import { OneReservationResolver } from 'src/app/core/resolvers/reservation/OneReservation.resolver';

export default [
  {
    path: '',
    title: 'Reservations',
    canActivate: [hasRoleGuard(RolesEnum.ADMIN)],
    resolve:{
      reservations:ReservationsResolver
    },
    loadComponent: () => import('./reservations/reservations.page'),
  },

  {
    path: 'create/:id',
    pathMatch: 'full',
    resolve: { oneRoom: OneRoomResolver },
    title: 'Crear reservación',
    canActivate: [hasRoleGuard(RolesEnum.USER)],
    loadComponent: () => import('./create-reservation/create-reservation.page'),
  },
  {
    path: ':id',
    resolve:{
      reservation:OneReservationResolver
    },
    title: 'Detalle de Reserva',
    loadComponent: () => import('./one-reservation/one-reservation.page'),
  },
] as Routes;
