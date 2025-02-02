import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly api_url = `${environment.ApiUrl}`;
  private readonly _http = inject(HttpClient);
}
