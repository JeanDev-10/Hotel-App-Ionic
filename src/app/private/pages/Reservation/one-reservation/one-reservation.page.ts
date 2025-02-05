import { IonicModule } from '@ionic/angular';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { RoomGalleryComponent } from '../../Room/components/room-gallery/room-gallery.component';
import { HasRoleDirective } from 'src/app/core/directives/hasRole.directive';

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
export default class OneReservationPage implements OnInit {
  private route = inject(ActivatedRoute);
  reservation = this.route.snapshot.data['reservation'].data;
  ngOnInit() {}

  // Cancelar reservación
  async cancelReservation(reservationId: number) {}
}
