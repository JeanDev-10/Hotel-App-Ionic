import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reservation-filter',
  standalone:true,
  imports:[
    CommonModule,IonicModule,FormsModule
  ],
  templateUrl: './reservation-filter.component.html',
  styleUrls: ['./reservation-filter.component.scss'],
})
export class ReservationFilterComponent {
  selectedType: string; // Tipo de habitación seleccionado

  constructor(){
    this.selectedType = ''; // Tipo de habitación seleccionado
  }
  @Output() filterChange = new EventEmitter<string>(); // Emite el tipo seleccionado

  // Método que se ejecuta al cambiar el filtro
  onFilterChange() {
    this.filterChange.emit(this.selectedType);
  }


}
