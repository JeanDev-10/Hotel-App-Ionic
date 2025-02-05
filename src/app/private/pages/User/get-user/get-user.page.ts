import { IonicModule } from '@ionic/angular';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ProfileComponent } from '../components/profile/profile.component';
import { ReservationsListComponent } from '../../Reservation/components/reservations-list/reservations-list.component';

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
  ],
})
export default class GetUserPage implements OnInit {
  private readonly _route=inject(ActivatedRoute)
  user!:any
  constructor() {}
  ionViewWillEnter() {
    this.user = this._route.snapshot.data['user'].data;
  }

  ngOnInit() {}
}
