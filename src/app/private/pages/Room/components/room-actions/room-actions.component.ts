import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HasRoleDirective } from 'src/app/core/directives/hasRole.directive';

@Component({
  selector: 'app-room-actions',
  standalone:true,
  imports:[CommonModule,IonicModule,HasRoleDirective],
  templateUrl: './room-actions.component.html',
  styleUrls: ['./room-actions.component.scss'],
})
export class RoomActionsComponent  {
  @Output() edit = new EventEmitter<void>(); // Evento para editar
  @Output() delete = new EventEmitter<void>(); // Evento para eliminar
  @Output() reserve = new EventEmitter<void>(); // Evento para reservar

  // Métodos para emitir eventos
  onEdit() {
    this.edit.emit();
  }

  onDelete() {
    this.delete.emit();
  }

  onReserve() {
    this.reserve.emit();
  }

}
