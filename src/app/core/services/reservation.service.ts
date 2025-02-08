import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private readonly apiUrl = `${environment.ApiUrl}reservation`;
  private readonly http=inject(HttpClient)

  getAllReservations() {
    return this.http.get(this.apiUrl);
  }

  getMyReservations() {
    return this.http.get(`${this.apiUrl}/client`);
  }

  getReservationById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createReservation(reservationData: any) {
    return this.http.post(this.apiUrl, reservationData);
  }

  cancelReservation(id: string) {
    return this.http.patch(`${this.apiUrl}/${id}`, {});
  }
}
