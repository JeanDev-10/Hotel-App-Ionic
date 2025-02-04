import { IonicModule } from '@ionic/angular';
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HasRoleDirective } from 'src/app/core/directives/hasRole.directive';

@Component({
  selector: 'app-reservation-list',
  standalone:true,
  imports:[IonicModule,CommonModule,RouterModule,HasRoleDirective],
  templateUrl: './reservations-list.component.html',
  styleUrls: ['./reservations-list.component.scss'],
})
export class ReservationsListComponent {
  @Input({required:true}) reservations: any[] = []; // Lista de reservaciones
  @Input() showUserInfo=false;
}
