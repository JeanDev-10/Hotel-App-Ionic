import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private readonly apiUrl = `${environment.ApiUrl}room`;
  private http=inject(HttpClient)

  getAllRooms() {
    return this.http.get(this.apiUrl);
  }

  getRoomById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createRoom(roomData: FormData) {
    return this.http.post(this.apiUrl, roomData);
  }

  updateRoom(id: string, roomData: FormData) {
    return this.http.put(`${this.apiUrl}/${id}`, roomData);
  }

  deleteRoom(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
