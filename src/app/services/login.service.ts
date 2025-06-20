import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' }) export class LoginService {
  private loginUrl = environment.apiUrl + 'login';

  constructor(private http: HttpClient) { }

  login(loginPayload: any): Observable<any> {
    return this.http.post<any>(this.loginUrl, loginPayload);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }
}
