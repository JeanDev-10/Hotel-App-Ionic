import { IonicModule } from '@ionic/angular';
import { Component, inject, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { RoomGalleryComponent } from '../components/room-gallery/room-gallery.component';
import { RoomActionsComponent } from '../components/room-actions/room-actions.component';

import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/core/services/room.service';
import { ToastService } from 'src/app/core/services/toast.service';

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
  private _roomService=inject(RoomService)

  private  readonly _toastService=inject(ToastService);
  room!:any
  constructor(private readonly _router: Router) {}
  onEdit() {
    console.log('Editar habitación');
    this._router.navigate([`/dashboard/room/edit/${this.room.id}`]);
  }
  ionViewWillEnter() {
    this.room = this.route.snapshot.data['oneRoom'].room;
  }
  onDelete() {
    this._roomService.deleteRoom(this.room.id).subscribe({
      next:()=>{
        this._toastService.presentToastSucess("Habitación eliminada correctamente");
        this._router.navigateByUrl("/dashboard/room");
      }
    })
    console.log('Eliminar habitación');
  }

  onReserve() {
    console.log('Reservar habitación');
    this._router.navigate([`/dashboard/reservation/create/${this.room.id}`]);
  }
}
