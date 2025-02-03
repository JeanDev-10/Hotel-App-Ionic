import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from '../components/profile/profile.component';
import { ReservationsListComponent } from '../../Reservation/components/reservations-list/reservations-list.component';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.page.html',
  styleUrls: ['./get-user.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
    RouterModule,
    ProfileComponent,
    ReservationsListComponent,
  ],
})
export default class GetUserPage implements OnInit {
  userData = {
    message: 'usuario con reservas y habitaciones',
    data: {
      id: 2,
      name: 'jean',
      lastname: 'rodriguez',
      email: 'jean@hotmail.com',
      role: {
        id: 2,
        name: 'Client',
      },
      reservations: [
        {
          id: 2,
          date_start: '2025-01-30T22:16:45.000Z',
          date_end: '2025-01-30T22:16:45.000Z',
          price_total: 20,
          user_id: 2,
          room_id: 3,
          status_id: 1,
          room: {
            id: 3,
            name: 'asdasd',
            description: 'asdasdas',
            price: 22,
            type_id: 1,
            images: [
              {
                id: 11,
                url: 'dasdsa',
                public_id: 'asdsada',
                room_id: 3,
              },
            ],
            types_room: {
              id: 1,
              name: 'Estándar',
            },
          },
          status_reservation: {
            id: 1,
            name: 'Pendiente',
          },
        },
        {
          id: 3,
          date_start: '2025-01-30T22:16:45.000Z',
          date_end: '2025-01-30T22:16:45.000Z',
          price_total: 22,
          user_id: 2,
          room_id: 3,
          status_id: 1,
          room: {
            id: 3,
            name: 'asdasd',
            description: 'asdasdas',
            price: 22,
            type_id: 1,
            images: [
              {
                id: 11,
                url: 'https://hotelvictoriachone.com/wp-content/uploads/2022/12/HABITACION-MATRIMONIAL-2-HOTEL-VICTORIA-CHONE-1750x1000.jpg',
                public_id: 'asdsada',
                room_id: 3,
              },
              {
                id: 11,
                url: 'https://hotelvictoriachone.com/wp-content/uploads/2022/12/HABITACION-MATRIMONIAL-2-HOTEL-VICTORIA-CHONE-1750x1000.jpg',
                public_id: 'asdsada',
                room_id: 3,
              },
              {
                id: 11,
                url: 'https://hotelvictoriachone.com/wp-content/uploads/2022/12/HABITACION-MATRIMONIAL-2-HOTEL-VICTORIA-CHONE-1750x1000.jpg',
                public_id: 'asdsada',
                room_id: 3,
              },
              {
                id: 11,
                url: 'https://hotelvictoriachone.com/wp-content/uploads/2022/12/HABITACION-MATRIMONIAL-2-HOTEL-VICTORIA-CHONE-1750x1000.jpg',
                public_id: 'asdsada',
                room_id: 3,
              },
            ],
            types_room: {
              id: 1,
              name: 'Estándar',
            },
          },
          status_reservation: {
            id: 1,
            name: 'Pendiente',
          },
        },
      ],
    },
  };
  constructor() {}

  ngOnInit() {}
}
