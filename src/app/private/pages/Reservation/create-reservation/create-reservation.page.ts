import { RoomService } from './../../../../core/services/room.service';
import { IonicModule } from '@ionic/angular';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { RoomGalleryComponent } from '../../Room/components/room-gallery/room-gallery.component';
import { ToastService } from 'src/app/core/services/toast.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ReservationService } from 'src/app/core/services/reservation.service';

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
export default class CreateReservationPage  {
  private route = inject(ActivatedRoute);
  private _reservationService = inject(ReservationService);
  private _router = inject(Router);
  private _roomService = inject(RoomService);
  private _toastService = inject(ToastService);
  room!: any;
  dateStart!: string; // Fecha de inicio
  dateEnd!: string; // Fecha de fin
  totalPrice: number = 0;
  // Fechas mínimas y máximas para los calendarios
  minStartDate!: string;
  maxStartDate!: string;
  minEndDate!: string;
  constructor() {}
  ionViewWillEnter() {
    this.room = this.route.snapshot.data['oneRoom'].room;
     // Obtener la habitación desde el estado de navegación

    // Establecer fechas mínimas y máximas
    const today = new Date().toISOString();
    this.minStartDate = today;
    this.maxStartDate = new Date(
      new Date().setFullYear(new Date().getFullYear() + 1)
    ).toISOString();
    this.minEndDate = today;
  }
  ionViewDidLeave() {
    this.resetValues();
  }
  // Validar el formulario
  isFormValid(): boolean {
    return !!this.dateStart && !!this.dateEnd && this.dateEnd > this.dateStart;
  }

  // Crear reservación
  createReservation() {
    if (!this.isFormValid()) {
      this._toastService.presentToastError('Formulario invalido!');
    }

    const reservationData = {
      room_id: this.room.id,
      date_start: this.formatDate(this.dateStart),
      date_end: this.formatDate(this.dateEnd),
    };
    this._reservationService.createReservation(reservationData).subscribe({
      next: () => {
        this._router.navigateByUrl('/dashboard/reservation-me');
        this._toastService.presentToastSucess('Reserva creada con exito!');
        this.resetValues();
      },
      error: (error) => {
        if (error.error.message=="La habitación ya está reservada en ese rango de fechas") {
          this.getRoom()
        }
        console.error('Error:', error);
      },
    });
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
  resetValues() {
    this.dateStart = ''; // Fecha de inicio
    this.dateEnd = ''; // Fecha de fin
    this.totalPrice = 0;
    // Fechas mínimas y máximas para los calendarios
    this.minStartDate = '';
    this.maxStartDate = '';
    this.minEndDate = '';
  }
  private getRoom(){
    this._roomService.getRoomById(this.room.id).subscribe({
      next:(data:any)=>{
        this.room=data.room
      }
    })
  }
   // Método para formatear la fecha en YYYY-MM-DD
  private formatDate(date: string): string {
    return date.split('T')[0]; // Extrae solo la parte de la fecha sin la hora
  }
}
