import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-one-reservation',
  templateUrl: './one-reservation.page.html',
  styleUrls: ['./one-reservation.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export default class OneReservationPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
