import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { ReservationsListComponent } from '../components/reservations-list/reservations-list.component';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ReservationFilterComponent } from '../components/reservation-filter/reservation-filter.component';

@Component({
  selector: 'app-my-reservations',
  templateUrl: './my-reservations.page.html',
  styleUrls: ['./my-reservations.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    ReservationsListComponent,
    NavbarComponent,
    ReservationFilterComponent,
  ],
})
export default class MyReservationsPage implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  reservations!: any;
  filteredReservation!: any;
  @ViewChild(ReservationFilterComponent)
  reservationFilter!: ReservationFilterComponent;
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
  constructor() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        console.log('Cambiando de página, reseteando filtro...');
        if (this.reservationFilter) {
          this.reservationFilter.selectedType = ''; // Reiniciar filtro
        }
      }
    });
  }

  ngOnInit() {}
}
