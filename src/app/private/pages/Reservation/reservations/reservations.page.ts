import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent } from '@ionic/angular/standalone';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ReservationsListComponent } from '../components/reservations-list/reservations-list.component';
import { ActivatedRoute } from '@angular/router';

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
  ],
})
export default class ReservationsPage implements OnInit {
  private route = inject(ActivatedRoute);
  reservations!:any
  constructor() {}
  ionViewWillEnter() {
    this.reservations = this.route.snapshot.data['reservations'].data;
  }

  ngOnInit() {}
}
