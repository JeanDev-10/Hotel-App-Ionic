import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ReservationsListComponent } from '../components/reservations-list/reservations-list.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ReservationFilterComponent } from '../components/reservation-filter/reservation-filter.component';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    NavbarComponent,
    ReservationsListComponent,
    ReservationFilterComponent,
  ],
})
export default class ReservationsPage implements OnInit {
  private route = inject(ActivatedRoute);
  reservations!: any;
  filteredReservation!: any;
  @ViewChild(ReservationFilterComponent)
  reservationFilter!: ReservationFilterComponent;

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
    this.reservations = this.route.snapshot.data['reservations'].data;
    this.filteredReservation = this.reservations;
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

  ngOnInit() {}
}
