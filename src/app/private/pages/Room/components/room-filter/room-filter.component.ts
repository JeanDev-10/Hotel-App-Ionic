import { IonicModule } from '@ionic/angular';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-room-filter',
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './room-filter.component.html',
  styleUrls: ['./room-filter.component.scss'],
})
export class RoomFilterComponent {
  selectedType: string; // Tipo de habitación seleccionado

  constructor() {
    this.selectedType = ''; // Tipo de habitación seleccionado
  }
  @Output() filterChange = new EventEmitter<string>(); // Emite el tipo seleccionado

  // Método que se ejecuta al cambiar el filtro
  onFilterChange() {
    this.filterChange.emit(this.selectedType);
  }

}
