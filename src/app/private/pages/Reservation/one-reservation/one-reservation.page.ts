import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { RoomGalleryComponent } from "../../Room/components/room-gallery/room-gallery.component";
import { HasRoleDirective } from 'src/app/core/directives/hasRole.directive';

@Component({
  selector: 'app-one-reservation',
  templateUrl: './one-reservation.page.html',
  styleUrls: ['./one-reservation.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarComponent, RouterModule, RoomGalleryComponent,HasRoleDirective],
})
export default class OneReservationPage implements OnInit {
  reservation = {
    id: 2,
    date_start: '2025-01-30T22:16:45.000Z',
    date_end: '2025-01-30T22:16:45.000Z',
    price_total: 20,
    user_id: 2,
    room_id: 3,
    status_id: 1,
    user: {
      id: 2,
      name: 'jean',
      lastname: 'rodriguez',
      email: 'jean@hotmail.com',
      password: '$2b$10$SqtYX3MYB8/5Unu6fefjB.aRoIRpNuF0s5klv22kz0GiTRVspNI4C',
      role_id: 2,
    },
    status_reservation: {
      id: 1,
      name: 'Pendiente',
    },
    room: {
      id: 3,
      name: 'asdasd',
      description: 'asdasdas',
      price: 22,
      type_id: 1,
      types_room: {
        id: 1,
        name: 'Estándar',
      },
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
    },
  };

  ngOnInit() {}


  // Cancelar reservación
  async cancelReservation(reservationId: number) {

  }
}
