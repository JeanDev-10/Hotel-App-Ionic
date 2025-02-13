import { Routes } from '@angular/router';
import { hasRoleGuard } from 'src/app/core/guards/hasRole.guard';
import { OneRoomResolver } from 'src/app/core/resolvers/room/OneRoom.resolver';
import { RoomsResolver } from 'src/app/core/resolvers/room/Room.resolver';
import { TypesRoomResolver } from 'src/app/core/resolvers/types room/typesRoom.resolver';
import { RolesEnum } from 'src/app/core/utils/Roles.enum';

export default[
  {
    path: '',
    resolve: { rooms: RoomsResolver },
    title:'Rooms',
    loadComponent: () =>
      import('./rooms/rooms.page'),
  },
  {
    path: 'create',
    pathMatch:'full',
    title: 'Crear Habitación',
    resolve: {
      roomTypes: TypesRoomResolver // Nombre con el que se inyectarán los datos
    },
    canActivate:[hasRoleGuard(RolesEnum.ADMIN)],
    loadComponent: () =>
      import('./create-room/create-room.page')
  },
  {
    path: 'edit/:id',
    pathMatch:'full',
    resolve: { oneRoom: OneRoomResolver, roomTypes:TypesRoomResolver },
    canActivate:[hasRoleGuard(RolesEnum.ADMIN)],
    title: 'Editar Habitación',
    loadComponent: () =>
      import('./edit-room/edit-room.page')
  },
  {
    path: ':id',
    pathMatch:'full',
    resolve: { oneRoom: OneRoomResolver },
    title: 'Detalle de Habitación',
    loadComponent: () =>
      import('./one-room/one-room.page')

  },
] as Routes;
