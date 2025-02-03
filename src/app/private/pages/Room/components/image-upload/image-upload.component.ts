import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomGalleryComponent } from "../room-gallery/room-gallery.component";

@Component({
  selector: 'app-image-upload',
  standalone:true,
  imports: [CommonModule, IonicModule, RoomGalleryComponent],
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent  {
  @Input() existingImages: any[] = []; // Imágenes existentes
  images: { file: File; preview: string }[] = []; // Imágenes seleccionadas
  @Output() imagesChange = new EventEmitter<File[]>(); // Emite las imágenes al componente padre

  // Maneja la selección de archivos
  onFileChange(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        if (this.images.length >= 5) break; // Máximo 5 imágenes
        const file = files[i];
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.images.push({ file, preview: e.target.result });
          this.emitImages();
        };
        reader.readAsDataURL(file);
      }
    }
  }

  // Elimina una imagen
  removeImage(index: number) {
    this.images.splice(index, 1);
    this.emitImages();
  }

  // Emite las imágenes al componente padre
  emitImages() {
    this.imagesChange.emit(this.images.map((img) => img.file));
  }

}
