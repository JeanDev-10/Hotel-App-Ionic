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
        data: { reuse: false } // Deshabilita el caché
      },
      {
        path: 'reservation',
        loadChildren: () => import('./pages/Reservation/reservation.routes'),
        data: { reuse: false } // Deshabilita el caché
      },
      {
        path: 'profile',
        loadChildren: () => import('./pages/User/user.routes'),
        data: { reuse: false } // Deshabilita el cachéw
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'room',
  },
];
