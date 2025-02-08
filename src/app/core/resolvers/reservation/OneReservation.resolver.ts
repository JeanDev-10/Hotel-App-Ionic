import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { ToastService } from "../../services/toast.service";
import { ReservationService } from "../../services/reservation.service";
import { catchError, of } from "rxjs";
@Injectable({ providedIn: 'root' })
export class OneReservationResolver implements Resolve<any> {
  private reservationService = inject(ReservationService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    if (!id) {
      this.toastService.presentToastError("Reserva no especificada");
      this.router.navigateByUrl("/dashboard/reservation");
      return of(null);
    }

    return this.reservationService.getReservationById(id).pipe(
      catchError(error => {
        this.toastService.presentToastError("Error al cargar la reservación");
        this.router.navigateByUrl("/dashboard/reservation");
        console.error('Error:', error);
        return of(null);
      })
    );
  }
}
