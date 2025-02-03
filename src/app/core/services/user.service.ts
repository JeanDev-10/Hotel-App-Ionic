import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private readonly apiUrl = `${environment.ApiUrl}user`;
  private readonly _http = inject(HttpClient);

  getUserReservations(userId: string) {
    return this._http.get(`${this.apiUrl}/${userId}/reservations`);
  }
}
