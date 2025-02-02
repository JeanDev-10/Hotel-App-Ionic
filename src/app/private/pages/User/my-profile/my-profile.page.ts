import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.page.html',
  styleUrls: ['./my-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, NavbarComponent],
})
export default class MyProfilePage implements OnInit {
  segment: string = 'profile';
  user = {
    name: 'Juan',
    lastName: 'Pérez',
    email: 'juan.perez@example.com',
    role: 'Usuario',
  };
  segmentChanged(event: any) {
    this.segment = event.detail.value;
  }
  constructor() {}

  ngOnInit() {}
}
