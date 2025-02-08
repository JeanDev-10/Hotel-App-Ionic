import { IonicModule } from '@ionic/angular';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ImageUploadComponent } from '../components/image-upload/image-upload.component';
import { RoomFormComponent } from '../components/room-form/room-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'src/app/core/services/room.service';
import { ToastService } from 'src/app/core/services/toast.service';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.page.html',
  styleUrls: ['./edit-room.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
    ImageUploadComponent,
    RoomFormComponent,
  ],
})
export default class EditRoomPage implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private _roomService=inject(RoomService)
  private  readonly _toastService=inject(ToastService);

  room!:any
  roomTypes!:any // Tipos de habitación
  selectedImages: File[] = []; // Imágenes seleccionadas
  constructor() {}
  ionViewWillEnter() {
    this.room = this.route.snapshot.data['oneRoom'].room;
    this.roomTypes = this.route.snapshot.data['roomTypes'].data;
  }
  ngOnInit() {}
  // Manejar el cambio de imágenes
  onImagesChange(images: File[]) {
    this.selectedImages = images;
  }
  onFormSubmit(formData: any) {
    const roomId = this.route.snapshot.paramMap.get('id');
    if (roomId) {
      const form = new FormData();
      form.append('name', formData.name);
      form.append('description', formData.description);
      form.append('price', formData.price);
      form.append('type_id', formData.type_id);
      if (this.selectedImages.length > 0) {
        this.selectedImages.forEach((image) => {
          form.append(`images`, image);
        });
      }
      console.log('enviar petición', form);
      this._roomService.updateRoom(this.room.id,form).subscribe({
        next: () => {
          this._toastService.presentToastSucess(
            'Habitación actualizada exitosamente!'
          );
          this.router.navigateByUrl("/dashboard/room")
        }
      });
    }
  }
}
