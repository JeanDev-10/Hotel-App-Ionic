// me.resolver.ts
import { inject, Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ToastService } from '../../services/toast.service';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({ providedIn: 'root' })
export class MyProfileResolver implements Resolve<any> {
  private authService = inject(AuthService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  resolve() {
    return this.authService.getMe().pipe(
      switchMap(user => {
        if (!user) {
          this.toastService.presentToastError('Debe iniciar sesión');
          this.router.navigate(['/auth/login']);
          return of(null);
        }
        return of(user);
      }),
      catchError(error => {
        this.toastService.presentToastError('Error al cargar datos de usuario');
        this.router.navigate(['/auth/login']);
        console.error('Error:', error);
        return of(null);
      })
    );
  }
}
