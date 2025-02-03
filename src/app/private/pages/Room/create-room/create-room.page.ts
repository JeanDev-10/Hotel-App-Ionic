import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { RoomFormComponent } from '../components/room-form/room-form.component';
import { ImageUploadComponent } from '../components/image-upload/image-upload.component';

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
  roomTypes: any[] = [
    {
      id: 1,
      name: 'Estándar',
    },
    {
      id: 2,
      name: 'Suite',
    },
    {
      id: 3,
      name: 'Familiar',
    },
  ]; // Tipos de habitación
  selectedImages: File[] = []; // Imágenes seleccionadas
  constructor() {}

  ngOnInit() {}

  onFormSubmit(formData: any) {
    if (this.selectedImages.length === 0) {
      alert('Debes subir al menos una imagen');
      return;
    }
    const form=new FormData()
    form.append('name',formData.name)
    form.append('description',formData.description)
    form.append('price',formData.price)
    form.append('type_id',formData.type_id)
    this.selectedImages.forEach((image) => {
      form.append(`images`, image);
    });
    console.log("enviar petición", form)
  }
  // Maneja el cambio de imágenes
  onImagesChange(images: File[]) {
    this.selectedImages = images;
  }
}
