// user-reservations.resolver.ts
import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { ToastService } from '../../services/toast.service';
import { UserService } from '../../services/user.service';

@Injectable({ providedIn: 'root' })
export class ProfileUserResolver implements Resolve<any> {
  private userService = inject(UserService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  resolve(route: ActivatedRouteSnapshot) {
    const userId = route.paramMap.get('id');

    if (!userId) {
      this.toastService.presentToastError('Usuario no especificado');
      this.router.navigate(['/dashboard/room']);
      return of([]);
    }

    return this.userService.getUserReservations(userId).pipe(
      catchError(error => {
        this.toastService.presentToastError('Error al cargar reservaciones del usuario');
        this.router.navigate(['/dashboard/room']);
        console.error('Error:', error);
        return of([]);
      })
    );
  }
}
