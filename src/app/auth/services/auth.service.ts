import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = `${environment.ApiUrl}`;
  private readonly _http = inject(HttpClient);
  private readonly _localStorage = inject(LocalStorageService);
  private userKey = 'user_data';

  login(credentials: { email: string; password: string }) {
    return this._http.post(`${this.apiUrl}login`, credentials).pipe(
      tap((response: any) => {
        this._localStorage.setToken(response.token);
      })
    );
  }

  register(userData: any) {
    return this._http.post(`${this.apiUrl}register`, userData);
  }

  logout() {
    return this._http.get(`${this.apiUrl}logout`, {}).pipe(
      tap((response: any) => {
        this._localStorage.removeToken();
        this.removeUser()
      })
    );;
  }

  getMe() {
    const storedUser = localStorage.getItem(this.userKey);

    if (storedUser) {
      return of(JSON.parse(storedUser));
    }

    return this._http.get(`${this.apiUrl}me`).pipe(
      tap((response: any) => {
        this.setUserData(response.data);
      }),
      catchError(() => of(null)) // Si hay un error, devuelve null
    );
  }
  // Guarda los datos del usuario en localStorage
  private setUserData(user: any): void {
    localStorage.setItem(this.userKey, JSON.stringify(user));
  }
  removeUser(){
    localStorage.removeItem(this.userKey);
  }
}
