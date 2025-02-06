import { IonicModule } from '@ionic/angular';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { RoomFormComponent } from '../components/room-form/room-form.component';
import { ImageUploadComponent } from '../components/image-upload/image-upload.component';
import { ToastService } from 'src/app/core/services/toast.service';
import { RoomService } from 'src/app/core/services/room.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-room',
  templateUrl: './create-room.page.html',
  styleUrls: ['./create-room.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
    RoomFormComponent,
    ImageUploadComponent,
  ],
})
export default class CreateRoomPage implements OnInit {
  private _roomService = inject(RoomService);
  private _router = inject(Router);
  private _route = inject(ActivatedRoute);
  roomTypes!: any;
  selectedImages: File[] = []; // Imágenes seleccionadas
  constructor(private readonly _toastService: ToastService) {}
  ionViewWillEnter() {
    this.roomTypes = this._route.snapshot.data['roomTypes'].data;
  }

  ngOnInit() {}

  onFormSubmit(formData: any) {
    if (this.selectedImages.length === 0) {
      this._toastService.presentToastError('Debe subir al menos una imagen');
      return;
    }
    const form = new FormData();
    form.append('name', formData.name);
    form.append('description', formData.description);
    form.append('price', formData.price);
    form.append('type_id', formData.type_id);
    this.selectedImages.forEach((image) => {
      form.append(`images`, image);
    });
    console.log('enviar petición', form);
    this._roomService.createRoom(form).subscribe({
      next: () => {
        this._toastService.presentToastSucess(
          'Habitación creada exitosamente!'
        );
        this._router.navigateByUrl('/dashboard/room');
      },
    });
  }
  // Maneja el cambio de imágenes
  onImagesChange(images: File[]) {
    this.selectedImages = images;
  }
}
