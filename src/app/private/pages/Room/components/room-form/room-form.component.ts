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
export class RoomFormComponent implements OnInit  {

  @Input() roomTypes: any[] = []; // Tipos de habitación
  @Input() roomData: any = null; // Datos de la habitación
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
  ngOnInit(): void {
    if (this.roomData) {
      this.roomForm.patchValue(this.roomData); // Precargar los datos del formulario
    }
  }

  // Envía los datos del formulario al componente padre
  onSubmit() {
    if (this.roomForm.valid) {
      this.formSubmit.emit(this.roomForm.value);
    }
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.roomForm.reset();
  }

}
