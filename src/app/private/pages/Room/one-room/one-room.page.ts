import { IonicModule } from '@ionic/angular';
import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { RoomGalleryComponent } from '../components/room-gallery/room-gallery.component';
import { RoomActionsComponent } from '../components/room-actions/room-actions.component';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-one-room',
  templateUrl: './one-room.page.html',
  styleUrls: ['./one-room.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    IonicModule,
    RoomGalleryComponent,
    RoomActionsComponent,
  ],
})
export default class OneRoomPage {
  private route = inject(ActivatedRoute);
  room = this.route.snapshot.data['oneRoom'].room;
  constructor(private readonly _router: Router) {}
  onEdit() {
    console.log('Editar habitación');
    this._router.navigate([`/dashboard/room/edit/${this.room.id}`]);
  }

  onDelete() {
    console.log('Eliminar habitación');
  }

  onReserve() {
    console.log('Reservar habitación');
    this._router.navigate([`/dashboard/reservation/create/${this.room.id}`]);
  }
}
