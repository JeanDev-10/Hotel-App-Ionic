import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { RoomGalleryComponent } from '../../Room/components/room-gallery/room-gallery.component';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-create-reservation',
  templateUrl: './create-reservation.page.html',
  styleUrls: ['./create-reservation.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
    RoomGalleryComponent,
  ],
})
export default class CreateReservationPage implements OnInit {
  room: any = {
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
    ],
    reservations: [
      {
        date_start: '2025-01-30T22:16:45.000Z',
        date_end: '2025-01-30T22:16:45.000Z',
      },
      {
        date_start: '2025-01-30T22:16:45.000Z',
        date_end: '2025-01-30T22:16:45.000Z',
      },
      {
        date_start: '2025-01-30T22:16:45.000Z',
        date_end: '2025-01-30T22:16:45.000Z',
      },
    ],
  };
  dateStart!: string; // Fecha de inicio
  dateEnd!: string; // Fecha de fin
  totalPrice: number = 0;
  // Fechas mínimas y máximas para los calendarios
  minStartDate!: string;
  maxStartDate!: string;
  minEndDate!: string;

  constructor(private readonly _toastService: ToastService) {}

  ngOnInit() {
    // Obtener la habitación desde el estado de navegación

    // Establecer fechas mínimas y máximas
    const today = new Date().toISOString();
    this.minStartDate = today;
    this.maxStartDate = new Date(
      new Date().setFullYear(new Date().getFullYear() + 1)
    ).toISOString();
    this.minEndDate = today;
  }

  // Validar el formulario
  isFormValid(): boolean {
    return !!this.dateStart && !!this.dateEnd && this.dateEnd > this.dateStart;
  }

  // Crear reservación
  createReservation() {
    if (!this.isFormValid()) {
      return;
    }

    const reservationData = {
      room_id: this.room.id,
      date_start: this.dateStart,
      date_end: this.dateEnd,
    };
    console.log(reservationData);
  }
  calculateTotalPrice() {
    if (this.dateStart && this.dateEnd) {
      const startDate = new Date(this.dateStart);
      const endDate = new Date(this.dateEnd);
      const timeDiff = endDate.getTime() - startDate.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24)); // Diferencia en días
      if (daysDiff > 0) {
        this.totalPrice = daysDiff * this.room.price; // Precio total
      } else {
        this._toastService.presentToastError('Deben ser fechas validas');
        console.log('toast no se puede con dias invalidos');
        this.totalPrice = 0;
        this.dateStart = ''; // Fecha de inicio
        this.dateEnd = '';
      }
    } else {
      this.totalPrice = 0;
    }
  }
}
