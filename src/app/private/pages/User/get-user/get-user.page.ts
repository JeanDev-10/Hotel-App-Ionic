import { IonicModule } from '@ionic/angular';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ActivatedRoute, NavigationEnd, Router, RouterModule } from '@angular/router';
import { ProfileComponent } from '../components/profile/profile.component';
import { ReservationsListComponent } from '../../Reservation/components/reservations-list/reservations-list.component';
import { ReservationFilterComponent } from "../../Reservation/components/reservation-filter/reservation-filter.component";

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
    ReservationFilterComponent
],
})
export default class GetUserPage implements OnInit {
  private readonly _route=inject(ActivatedRoute)
  user!:any
  reservationFiltered!:any
  @ViewChild(ReservationFilterComponent) reservationFilter!:ReservationFilterComponent

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Cambiando de página, reseteando filtro...');
        if (this.reservationFilter) {
          this.reservationFilter.selectedType = ''; // Reiniciar filtro
        }
      }
    });
  }
  ionViewWillEnter() {
    this.user = this._route.snapshot.data['user'].data;
    this.reservationFiltered=this.user.reservations
  }
  onFilterChange(type: string) {
    console.log(type);
    if (type) {
      this.reservationFiltered = this.user.reservations.filter(
        (room: any) => room.status_reservation.name === type
      );
    } else {
      this.reservationFiltered = this.user.reservations; // Mostrar todas las habitaciones si no hay filtro
    }
  }
  ngOnInit() {}
}
