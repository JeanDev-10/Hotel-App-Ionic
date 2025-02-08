import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonButton } from '@ionic/angular/standalone';
import { NavbarComponent } from "../../../shared/components/navbar/navbar.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonButton, IonImg, IonContent, CommonModule, FormsModule, NavbarComponent,RouterModule]
})
export default class WelcomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
