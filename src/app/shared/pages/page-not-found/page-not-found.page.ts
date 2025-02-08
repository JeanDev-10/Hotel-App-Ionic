import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonCard,
  IonCardContent,
  IonImg,
  IonButton,
} from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.page.html',
  styleUrls: ['./page-not-found.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonImg,
    IonCardContent,
    IonCard,
    IonContent,
    CommonModule,
    FormsModule,
    IonButton,
    RouterModule,
  ],
})
export default class PageNotFoundPage {
  joke: string = '';

  constructor() {
    this.joke = this.getRandomJoke();
  }

  getRandomJoke(): string {
    const jokes = [
      '¿Por qué el programador siempre confunde Halloween con Navidad? Porque Oct 31 = Dec 25.',
      '¿Qué hace un pez en el agua? ¡Nada!',
      '¿Qué le dice un semáforo a otro? No me mires, ¡me estoy cambiando!',
      '¿Qué hace una abeja en el gimnasio? ¡Zum-ba!',
      '¿Por qué los pájaros no usan Facebook? Porque ya tienen Twitter.',
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }
}
