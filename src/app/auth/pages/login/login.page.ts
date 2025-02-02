import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import { arrowForwardCircle, eyeOffOutline, eyeOutline, personAddOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ IonicModule,CommonModule, FormsModule, NavbarComponent,RouterModule],
})
export default class LoginPage implements OnInit {
  constructor() {
    this.registerIcons();
  }

  ngOnInit() {}

  private registerIcons() {
    addIcons({
      eyeOffOutline,
      eyeOutline,
      personAddOutline,
      arrowForwardCircle,
    });
  }
}
