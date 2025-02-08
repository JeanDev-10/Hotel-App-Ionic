import { inject, Injectable } from "@angular/core";
import { Resolve, Router } from "@angular/router";
import { ToastService } from "../../services/toast.service";
import { ReservationService } from "../../services/reservation.service";
import { catchError, of } from "rxjs";

@Injectable({ providedIn: 'root' })
export class ReservationsResolver implements Resolve<any> {
  private reservationService = inject(ReservationService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  resolve() {
    return this.reservationService.getAllReservations().pipe(
      catchError(error => {
        this.toastService.presentToastError("Error al cargar las reservaciones");
        this.router.navigateByUrl("/dashboard");
        console.error('Error:', error);
        return of([]);
      })
    );
  }
}
