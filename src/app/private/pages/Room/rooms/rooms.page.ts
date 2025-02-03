import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { RoomFilterComponent } from '../components/room-filter/room-filter.component';
import { RoomCardComponent } from '../components/room-card/room-card.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NavbarComponent,
    RoomFilterComponent,
    RoomCardComponent,
    CommonModule,RouterModule
  ],
})
export default class RoomsPage implements OnInit {
  rooms: any = [
    {
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
    },
    {
      id: 2,
      name: 'Room 102',
      description: 'Habitación estándar',
      price: 100,
      types_room: {
        id: 2,
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
  ]; // Todas las habitaciones
  filteredRooms: any[] = [
    {
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
      ],
    },
    {
      id: 2,
      name: 'Room 102',
      description: 'Habitación estándar',
      price: 100,
      types_room: {
        id: 2,
        name: 'Estándar',
      },
      images: [
        {
          id: 11,
          url: 'https://hotelvictoriachone.com/wp-content/uploads/2022/12/HABITACION-MATRIMONIAL-2-HOTEL-VICTORIA-CHONE-1750x1000.jpg',
          public_id: 'asdsada',
          room_id: 3,
        },
      ],
    },
  ]; // Habitaciones filtradas
  constructor() {}

  ngOnInit() {}
  onFilterChange(type: string) {
    if (type) {
      this.filteredRooms = this.rooms.filter(
        (room: any) => room.types_room.name === type
      );
    } else {
      this.filteredRooms = this.rooms; // Mostrar todas las habitaciones si no hay filtro
    }
  }
}
