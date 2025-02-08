import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-room-gallery',
  standalone:true,
  imports:[CommonModule,IonicModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './room-gallery.component.html',
  styleUrls: ['./room-gallery.component.scss'],
})
export class RoomGalleryComponent  {
  @Input({required:true}) images: any[] = []; // Recibe las imágenes como entrada
  isModalOpen = false; // Controla la visibilidad del modal
  slideOpts = {
    initialSlide: 0,
    speed: 400,
  }; // Opciones del slider

  // Abre el modal con la imagen seleccionada
  openImage(index: number) {
    this.slideOpts.initialSlide = index;
    this.isModalOpen = true;
  }

  // Cierra el modal
  closeImage() {
    this.isModalOpen = false;
  }

}
