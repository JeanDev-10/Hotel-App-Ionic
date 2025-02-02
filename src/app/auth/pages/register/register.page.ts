import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { eyeOffOutline, eyeOutline, lockClosed, arrowForwardCircle, eye, add, personAddOutline } from 'ionicons/icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
  ],
})
export default class RegisterPage implements OnInit {
  constructor() {
    this.registerIcons();
  }

  ngOnInit() {}
  private registerIcons() {
    addIcons({
      eyeOffOutline,
      eyeOutline,
      lockClosed,
      arrowForwardCircle,
      eye,
      add,
      personAddOutline,
    });
  }
}
