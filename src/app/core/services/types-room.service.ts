import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class TypesRoomService {
  private readonly apiUrl = `${environment.ApiUrl}types-rooms`;
  private readonly http=inject(HttpClient)

  getAll() {
    return this.http.get(this.apiUrl);
  }

}
