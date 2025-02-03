import { IonicModule } from '@ionic/angular';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from 'src/app/shared/components/navbar/navbar.component';
import { Router, RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { eyeOffOutline, eyeOutline, lockClosed, arrowForwardCircle, eye, add, personAddOutline } from 'ionicons/icons';
import { ToastService } from 'src/app/core/services/toast.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    RouterModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
    ReactiveFormsModule
  ],
})
export default class RegisterPage implements OnInit {
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private readonly _authService = inject(AuthService);
  private readonly _router = inject(Router);
  registerForm!: FormGroup;
  IsPassword: boolean = false;
  IsConfirmationPassword: boolean = false;
  constructor() {
    this.registerIcons();
    this.registerRegisterForm();
  }


  SeePassword() {
      this.IsPassword = !this.IsPassword;
  }
  ngOnInit() {}
  getformHasError(field: string, rule: string): boolean | undefined {
    return this.registerForm.get(field)?.hasError(rule);
  }
  getFormHasTouch(field: string): boolean | undefined {
    return this.registerForm.get(field)?.touched;
  }

  private registerRegisterForm() {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(5)]],
        lastname: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
      },
    );
  }
  onSubmit() {
    if (this.registerForm.valid) {
      /**
       * ! ENVIAR PETICIÓN HTTP
       *  */
      console.log(this.registerForm.value);
      this._authService.register(this.registerForm.value).subscribe({
        next: (data) => {
          console.log(data);
          this.toastService.presentToastSucess(
            '¡Credenciales creadas exitosamente!'
          );
          this._router.navigateByUrl('/auth/login');
        },
      });
    } else {
      this.toastService.presentToastError('¡Formulario invalido!');
    }
  }
  private registerIcons() {
    addIcons({
      eyeOffOutline,
      eyeOutline,
      lockClosed,
      arrowForwardCircle,
      eye,
      add,
      personAddOutline,
    });
  }
}
