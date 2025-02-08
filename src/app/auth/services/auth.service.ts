import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { catchError, of, tap } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { environment } from 'src/environments/environment';
import { Auth, authState } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = `${environment.ApiUrl}`;
  private userKey = 'user_data';

  constructor(
    private _http: HttpClient,
    private _afAuth: Auth,
    private _localStorage: LocalStorageService
  ) {}

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
        this.removeUser();
      })
    );
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

  removeUser() {
    localStorage.removeItem(this.userKey);
  }

  async googleLogin() {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this._afAuth, provider);
      const idToken = await result.user?.getIdToken();

      return this._http.post(`${this.apiUrl}google-auth`, { idToken }).pipe(
        tap((response: any) => {
          // Almacenar el token JWT recibido del backend
          this._localStorage.setToken(response.token);
        }),
        catchError((error) => {
          console.error('Error al autenticar con Google:', error);
          return of(null); // Maneja el error adecuadamente
        })
      );
    } catch (error) {
      console.error('Error al intentar iniciar sesión con Google:', error);
      throw error;
    }
  }
  async githubLogin() {
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(this._afAuth, provider);
      const idToken = await result.user?.getIdToken();

      return this._http.post(`${this.apiUrl}github-auth`, { idToken }).pipe(
        tap((response: any) => {
          // Almacenar el token JWT recibido del backend
          this._localStorage.setToken(response.token);
        }),
        catchError((error) => {
          console.error('Error al autenticar con Github:', error);
          return of(null); // Maneja el error adecuadamente
        })
      );
    } catch (error) {
      console.error('Error al intentar iniciar sesión con Github:', error);
      throw error;
    }
  }
}
