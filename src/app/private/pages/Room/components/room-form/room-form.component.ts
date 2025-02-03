import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-room-form',
  standalone:true,
  imports:[CommonModule,IonicModule,ReactiveFormsModule],
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.scss'],
})
export class RoomFormComponent  {

  @Input() roomTypes: any[] = []; // Tipos de habitación
  @Output() formSubmit = new EventEmitter<any>(); // Emite los datos del formulario

  roomForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.roomForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(0.01)]],
      type_id: ['', Validators.required],
    });
  }

  // Envía los datos del formulario al componente padre
  onSubmit() {
    if (this.roomForm.valid) {
      this.formSubmit.emit(this.roomForm.value);
    }
  }

}
