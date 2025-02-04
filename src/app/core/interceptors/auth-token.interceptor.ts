// jwt.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { LocalStorageService } from '../services/local-storage.service';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Location } from '@angular/common';
import { ToastService } from '../services/toast.service';
export const AuthTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const localStorageService = inject(LocalStorageService);
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
        toastService.presentToastError('No autenticado');
        localStorageService.removeToken();
        router.navigate(['/auth/login']);
      } else if (err.status === 403) {
        toastService.presentToastError('No autorizado');
        location.back(); // Regresa a la ruta anterior
      } else if (err.status === 422) {
        toastService.presentToastError(
          'Existen errores de validación en los datos proporcionados'
        );
      }
      throw err;
    })
  );
};
