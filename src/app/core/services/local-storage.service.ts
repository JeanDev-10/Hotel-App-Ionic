import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private readonly TOKEN_KEY = 'auth_token';

  getToken(): string | null {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  removeToken(): void {
    localStorage.removeItem(this.TOKEN_KEY);
  }
}
