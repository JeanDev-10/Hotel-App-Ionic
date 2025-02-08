import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { HasRoleDirective } from 'src/app/core/directives/hasRole.directive';
import { addIcons } from 'ionicons';
import { checkboxOutline, closeOutline, pencilOutline } from 'ionicons/icons';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-room-actions',
  standalone: true,
  imports: [CommonModule, IonicModule, HasRoleDirective],
  templateUrl: './room-actions.component.html',
  styleUrls: ['./room-actions.component.scss'],
})
export class RoomActionsComponent {
  private readonly _alertController = inject(AlertController);
  @Output() edit = new EventEmitter<void>(); // Evento para editar
  @Output() delete = new EventEmitter<void>(); // Evento para eliminar
  @Output() reserve = new EventEmitter<void>(); // Evento para reservar

  // Métodos para emitir eventos
  constructor(){
    this.registerIcons()
  }
  onEdit() {
    this.edit.emit();
  }

  async onDelete () {
    const alert = await this._alertController.create({
      header: 'Detalle de Habitación',
      message: '¿Estás seguro de eliminar esta habitación?',
      buttons: [
        {
          text: 'Sí',
          handler: () => {
            this.delete.emit();
          }
        },
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'secondary',
        },

      ],
      animated: true,
      backdropDismiss: true,
    });

    await alert.present();
  }

  onReserve() {
    this.reserve.emit();
  }
  private registerIcons() {
    addIcons({
      checkboxOutline,
      closeOutline,
      pencilOutline
    });
  }
}
