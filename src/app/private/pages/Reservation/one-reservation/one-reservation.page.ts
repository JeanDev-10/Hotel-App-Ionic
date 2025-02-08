import { IonicModule } from '@ionic/angular';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RoomGalleryComponent } from '../../Room/components/room-gallery/room-gallery.component';
import { HasRoleDirective } from 'src/app/core/directives/hasRole.directive';
import { AlertController } from '@ionic/angular';
import { ReservationService } from 'src/app/core/services/reservation.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-one-reservation',
  templateUrl: './one-reservation.page.html',
  styleUrls: ['./one-reservation.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
    RouterModule,
    RoomGalleryComponent,
    HasRoleDirective,
  ],
})
export default class OneReservationPage {
  private readonly _alertController = inject(AlertController);
  private readonly _reservationService = inject(ReservationService);
  private readonly _toastService = inject(ToastService);
  private readonly _router = inject(Router);

  private route = inject(ActivatedRoute);
  reservation!: any;
  ngOnInit() {}
  ionViewWillEnter() {
    this.reservation = this.route.snapshot.data['reservation'].data;
  }

  // Cancelar reservación
  async cancelReservation(reservationId: number) {
    const alert = await this._alertController.create({
      header: 'Detalle de Reserva',
      message: '¿Estás seguro de cancelar esta reservación?',
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            this.cancelTheReservation();
          },
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        },
      ],
      animated: true,
      backdropDismiss: true,
    });

    await alert.present();
  }

  cancelTheReservation() {
    this._reservationService.cancelReservation(this.reservation.id).subscribe({
      next: () => {
        this._toastService.presentToastSucess(
          'Reservación cancelada correctamente!'
        );
        this._router.navigateByUrl('/dashboard/reservation-me');
      },
    });
  }
}
