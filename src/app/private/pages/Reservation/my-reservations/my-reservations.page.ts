import { IonicModule } from '@ionic/angular';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReservationsListComponent } from '../components/reservations-list/reservations-list.component';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ReservationFilterComponent } from '../components/reservation-filter/reservation-filter.component';
import { ReservationService } from 'src/app/core/services/reservation.service';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.page.html',
  styleUrls: ['./my-reservations.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReservationsListComponent,
    NavbarComponent,
    ReservationFilterComponent,
    IonicModule
  ],
})
export default class MyReservationsPage  {
  private route = inject(ActivatedRoute);
  private _reservationService = inject(ReservationService);
  private router = inject(Router);
  reservations!: any;
  filteredReservation!: any;
  @ViewChild(ReservationFilterComponent)
  reservationFilter!: ReservationFilterComponent;

  constructor() {
    this.resetFilter()
  }
  onFilterChange(type: string) {
    console.log(type);
    if (type) {
      this.filteredReservation = this.reservations.filter(
        (room: any) => room.status_reservation.name === type
      );
    } else {
      this.filteredReservation = this.reservations; // Mostrar todas las habitaciones si no hay filtro
    }
  }
  ionViewWillEnter() {
    this.reservations = this.route.snapshot.data['reservations'].data;
    this.filteredReservation = this.reservations;
  }
  handleRefresh(event:CustomEvent){
    this.getReservations();
    this.reservationFilter.selectedType = ''; // Reiniciar filtro
    (event.target as HTMLIonRefresherElement).complete();
  }
  private getReservations() {
    this._reservationService.getMyReservations().subscribe({
      next: (data: any) => {
        this.reservations = data.data;
        this.filteredReservation = this.reservations;
      },
    });
  }
  private resetFilter() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Cambiando de página, reseteando filtro...');
        if (this.reservationFilter) {
          this.reservationFilter.selectedType = ''; // Reiniciar filtro
        }
      }
    });
  }
}
