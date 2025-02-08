// room.resolver.ts
import { inject, Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { RoomService } from '../../services/room.service';
import { ToastService } from '../../services/toast.service';

@Injectable({ providedIn: 'root' })
export class RoomsResolver implements Resolve<any> {
  private roomService = inject(RoomService);
  private toastService=inject(ToastService)
  private router=inject(Router)
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.roomService.getAllRooms().pipe(
      catchError(error => {
        this.toastService.presentToastError("Error al cargar las habitaciones");
        this.router.navigateByUrl("/dashboard")
        console.error('Error al cargar habitaciones:', error);
        return of([]); // Devuelve array vacío en caso de error
      })
    );
  }
}


