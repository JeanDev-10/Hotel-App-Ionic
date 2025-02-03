import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ToastService } from 'src/app/core/services/toast.service';
import { UserService } from 'src/app/core/services/user.service';
import { addIcons } from 'ionicons';
import { personOutline, mail, logOutOutline, eyeOffOutline, eyeOutline } from 'ionicons/icons';

@Component({
  selector: 'app-change-password',
  standalone:true,
  imports:[CommonModule,RouterModule,FormsModule,IonicModule,ReactiveFormsModule],
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent {

  IsNewPassword: boolean = false;
  IsPassword: boolean = false;
  IsConfirmationPassword: boolean = false;
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private _userService = inject(UserService);
  PasswordForm!: FormGroup;
  constructor() {
    this.registerPasswordForm();
    this.registerIcons();
  }

  private registerIcons() {
    addIcons({
      personOutline,
      mail,
      logOutOutline,
      eyeOffOutline,
      eyeOutline,
    });
  }
  getformHasError(
    form: FormGroup,
    field: string,
    rule: string
  ): boolean | undefined {
    return form.get(field)?.hasError(rule);
  }
  getFormHasTouch(form: FormGroup, field: string): boolean | undefined {
    return form.get(field)?.touched;
  }

  private registerPasswordForm() {
    this.PasswordForm = this.fb.group(
      {
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(20),
          ],
        ],
        new_password: [
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
  SeePassword(text: string) {
    if (text == 'password') {
      this.IsPassword = !this.IsPassword;
    } else if (text == 'new_password') {
      this.IsNewPassword = !this.IsNewPassword;
    } else {
      this.IsConfirmationPassword = !this.IsConfirmationPassword;
    }
  }
  onSubmitPassword() {
    if (this.PasswordForm.valid ) {
      /**
       * ! ENVIAR PETICIÓN HTTP
       *  */
      console.log(this.PasswordForm.value);
      const data={
        password: this.PasswordForm.value.password,
        newPassword: this.PasswordForm.value.new_password,
      }
      this._userService.changePassword(data).subscribe({
        next: () => {
          this.toastService.presentToastSucess(
            '¡Cambio de contraseña exitoso!'
          );
          this.PasswordForm.reset({
            password:'',
            new_password:'',
          });
        },
        error: (error:any) => {
          console.error(error);
        },
      });
    } else {
      /**
       * ! MOSTRAR TOAST DE FORMULARIO INVALIDO
       *  */
      this.toastService.presentToastError('¡Formulario invalido!');
    }
  }

}
