import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
} from '@ionic/angular/standalone';
import { ReservationsListComponent } from '../components/reservations-list/reservations-list.component';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ActivatedRoute } from '@angular/router';

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
  ],
})
export default class MyReservationsPage implements OnInit {
  private route = inject(ActivatedRoute);
  reservations!:any

  ionViewWillEnter() {
    this.reservations = this.route.snapshot.data['reservations'].data;
  }
  constructor() {}

  ngOnInit() {}
}
