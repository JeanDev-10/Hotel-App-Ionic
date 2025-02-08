import { ActivatedRouteSnapshot, Resolve, Router } from "@angular/router";
import { catchError, of } from "rxjs";
import { RoomService } from "../../services/room.service";
import { inject, Injectable } from "@angular/core";
import { ToastService } from "../../services/toast.service";

@Injectable({ providedIn: 'root' })
export class OneRoomResolver implements Resolve<any> {
  private roomService = inject(RoomService);
  private toastService=inject(ToastService)
  private router=inject(Router)

  resolve(route: ActivatedRouteSnapshot) {
    const id = route.paramMap.get('id');
    if (!id) return of(null);

    return this.roomService.getRoomById(id).pipe(
      catchError(error => {
        this.toastService.presentToastError("Error al cargar la habitación");
        this.router.navigateByUrl("/dashboard")
        console.error('Error al cargar habitación:', error);
        return of(null); // Devuelve null si hay error
      })
    );
  }
}
