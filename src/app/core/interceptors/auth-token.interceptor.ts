// jwt.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Location } from '@angular/common';
import { ToastService } from '../services/toast.service';
import { AuthService } from 'src/app/auth/services/auth.service';
export const AuthTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService);
  const authService = inject(AuthService);
  const router = inject(Router);
  const location = inject(Location);
  const toastService = inject(ToastService);
  const token = localStorageService.getToken();

  const authReq = token
    ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } })
    : req;

  return next(authReq).pipe(
    catchError((err) => {
      console.error(err);
      if (err.status === 401) {
        toastService.presentToastError(err.error.message);
        localStorageService.removeToken();
        authService.removeUser()
        router.navigate(['/auth/login']);
      } else if (err.status === 403) {
        toastService.presentToastError('No autorizado');
        location.back(); // Regresa a la ruta anterior
      } else if (err.status === 422) {
        if(err.error.errors){
          const errorMessages = err.error.errors
          .map((e: any) => e.msg) // Extrae los mensajes de error
          .join('\n'); // Une los mensajes con un salto de línea
          toastService.presentToastError(
            errorMessages ||
            'Existen errores de validación en los datos proporcionados'
          );
        }
        if(err.error.message){
          toastService.presentToastError(
            err.error.message
          );
        }
      }else if(err.status==400){
        toastService.presentToastError(err.error.message)
      }
      throw err;
    })
  );
};
