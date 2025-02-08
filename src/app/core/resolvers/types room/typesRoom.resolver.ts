// types-room.resolver.ts
import { inject, Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { ToastService } from '../../services/toast.service';
import { TypesRoomService } from '../../services/types-room.service';

@Injectable({ providedIn: 'root' })
export class TypesRoomResolver implements Resolve<any> {
  private typesRoomService = inject(TypesRoomService);
  private toastService = inject(ToastService);
  private router = inject(Router);

  resolve() {
    return this.typesRoomService.getAll().pipe(
      catchError(error => {
        this.toastService.presentToastError('Error al cargar tipos de habitación');
        this.router.navigateByUrl('/dashboard');
        console.error('Error loading room types:', error);
        return of([]); // Devuelve array vacío para evitar errores en el componente
      })
    );
  }
}
