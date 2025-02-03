import { IonicModule } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../../../../shared/components/navbar/navbar.component';
import { ImageUploadComponent } from '../components/image-upload/image-upload.component';
import { RoomFormComponent } from '../components/room-form/room-form.component';
import { ActivatedRoute } from '@angular/router';

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
  room: any = {
    id: 1,
    name: 'Room 101',
    description: 'Habitación de lujo',
    price: 200,
    types_room: {
      id: 1,
      name: 'Suite',
    },
    images: [
      {
        id: 11,
        url: 'https://hotelvictoriachone.com/wp-content/uploads/2022/12/HABITACION-MATRIMONIAL-2-HOTEL-VICTORIA-CHONE-1750x1000.jpg',
        public_id: 'asdsada',
        room_id: 3,
      },
      {
        id: 11,
        url: 'https://hotelvictoriachone.com/wp-content/uploads/2022/12/HABITACION-MATRIMONIAL-2-HOTEL-VICTORIA-CHONE-1750x1000.jpg',
        public_id: 'asdsada',
        room_id: 3,
      },
      {
        id: 11,
        url: 'https://hotelvictoriachone.com/wp-content/uploads/2022/12/HABITACION-MATRIMONIAL-2-HOTEL-VICTORIA-CHONE-1750x1000.jpg',
        public_id: 'asdsada',
        room_id: 3,
      },
      {
        id: 11,
        url: 'https://hotelvictoriachone.com/wp-content/uploads/2022/12/HABITACION-MATRIMONIAL-2-HOTEL-VICTORIA-CHONE-1750x1000.jpg',
        public_id: 'asdsada',
        room_id: 3,
      },
    ],
  };
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
  constructor(private route: ActivatedRoute) {}

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
    }
  }
}
