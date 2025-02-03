import { IonicModule } from '@ionic/angular';
import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { RoomGalleryComponent } from '../components/room-gallery/room-gallery.component';
import { RoomActionsComponent } from '../components/room-actions/room-actions.component';

import { Router } from '@angular/router';

@Component({
  selector: 'app-one-room',
  templateUrl: './one-room.page.html',
  styleUrls: ['./one-room.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    IonicModule,
    RoomGalleryComponent,
    RoomActionsComponent,
  ],
})
export default class OneRoomPage {
  constructor(private readonly _router: Router) {}
  room: any = {
    id: 1,
    name: 'Room 101',
    description: 'Habitación de lujo',
    price: 200,
    types_room: {
      id: 1,
      name: 'Suite',
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
  };
  isAdmin: boolean = false; // Indica si el usuario es admin
  // Métodos para manejar acciones
  onEdit() {
    console.log('Editar habitación');
    this._router.navigate([`/dashboard/room/edit/${this.room.id}`]);

  }

  onDelete() {
    console.log('Eliminar habitación');
  }

  onReserve() {
    console.log('Reservar habitación');
    this._router.navigate([`/dashboard/reservation/create/${this.room.id}`]);
  }
}
