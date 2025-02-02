import { Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

export const PRIVATE_ROUTES: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'room',
        pathMatch: 'full',
      },
      {
        path: 'room',
        loadChildren: () => import('./pages/Room/room.routes'),
      },
      {
        path: 'reservation',
        loadChildren: () => import('./pages/Reservation/reservation.routes'),
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/User/user.routes'),
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'room',
  },
];
