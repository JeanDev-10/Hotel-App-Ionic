import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = `${environment.ApiUrl}`;
  private readonly _http = inject(HttpClient);
  private readonly _localStorage = inject(LocalStorageService);

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
    return this._http.post(`${this.apiUrl}logout`, {}).pipe(
      tap((response: any) => {
        this._localStorage.removeToken();
      })
    );;
  }

  getMe() {
    return this._http.get(`${this.apiUrl}me`);
  }


}
