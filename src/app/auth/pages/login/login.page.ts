import { IonicModule } from '@ionic/angular';
import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NavbarComponent } from '../../../shared/components/navbar/navbar.component';
import {
  arrowForwardCircle,
  eyeOffOutline,
  eyeOutline,
  personAddOutline,
} from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { Router, RouterModule } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { ToastService } from 'src/app/core/services/toast.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    NavbarComponent,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export default class LoginPage implements OnInit {
  private toastService = inject(ToastService);
  private fb = inject(FormBuilder);
  private readonly _authService = inject(AuthService);
  private readonly _localStorageService = inject(LocalStorageService);
  private readonly _router = inject(Router);
  IsPassword: boolean = false;
  loginForm!: FormGroup;
  constructor() {
    this.registerIcons();
    this.registerLoginForm();
  }
  ionViewDidLeave() {
    this.loginForm.reset();
  }
  SeePassword() {
    this.IsPassword = !this.IsPassword;
  }

  onSubmit() {
    if (this.loginForm.valid) {
      /**
       * ! ENVIAR PETICIÓN HTTP
       *  */
      console.log(this.loginForm.value);
      this._authService.login(this.loginForm.value).subscribe({
        next: (data) => {
          console.log(data);
          this._authService.getMe().subscribe({
            next: () => {
              this.toastService.presentToastSucess('Inicio de Sesión exitoso!');
              this._router.navigateByUrl('/dashboard');
            },
          });
        },
      });
    } else {
      /**
       * ! MOSTRAR TOAST DE FORMULARIO INVALIDO
       *  */
      this.toastService.presentToastError('¡Formulario invalido!');
    }
  }
  ngOnInit() {}

  private registerIcons() {
    addIcons({
      eyeOffOutline,
      eyeOutline,
      personAddOutline,
      arrowForwardCircle,
    });
  }
  getformHasError(field: string, rule: string): boolean | undefined {
    return this.loginForm.get(field)?.hasError(rule);
  }
  getFormHasTouch(field: string): boolean | undefined {
    return this.loginForm.get(field)?.touched;
  }
  private registerLoginForm() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
    });
  }
}
