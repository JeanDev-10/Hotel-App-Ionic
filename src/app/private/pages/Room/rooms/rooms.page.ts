import { IonicModule } from '@ionic/angular';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { RoomFilterComponent } from '../components/room-filter/room-filter.component';
import { RoomCardComponent } from '../components/room-card/room-card.component';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterModule,
} from '@angular/router';
import { addIcons } from 'ionicons';
import { addCircle, addCircleOutline } from 'ionicons/icons';
import { HasRoleDirective } from 'src/app/core/directives/hasRole.directive';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    NavbarComponent,
    RoomFilterComponent,
    RoomCardComponent,
    CommonModule,
    RouterModule,
    HasRoleDirective,
  ],
})
export default class RoomsPage implements OnInit {
  private route = inject(ActivatedRoute);
  private router=inject(Router)
  rooms!: any;
  filteredRooms!: any;
  @ViewChild(RoomFilterComponent)
  roomFilter!: RoomFilterComponent;

  constructor() {
    this.registerIcons();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        console.log('Cambiando de página, reseteando filtro...');
        if (this.roomFilter) {
          this.roomFilter.selectedType = ''; // Reiniciar filtro
        }
      }
    });
  }
  ionViewWillEnter() {
    this.rooms = this.route.snapshot.data['rooms'].data;
    this.filteredRooms = this.rooms;
  }

  ngOnInit() {}
  onFilterChange(type: string) {
    if (type) {
      this.filteredRooms = this.rooms.filter(
        (room: any) => room.types_room.name === type
      );
    } else {
      this.filteredRooms = this.rooms; // Mostrar todas las habitaciones si no hay filtro
    }
  }
  registerIcons() {
    addIcons({
      addCircleOutline,
    });
  }
}
