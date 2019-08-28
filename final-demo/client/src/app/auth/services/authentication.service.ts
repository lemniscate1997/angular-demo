import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { isUndefined, isNullOrUndefined } from 'util';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = `${environment.backendEndpoint}/auth`;
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: ban-types
  validateUser(userName: String, password: String): Observable<any> {
    return this.http.post(`${this.url}/login`, { Username: userName, Password: password }, { withCredentials: true });
  }

  createUser(userData): Observable<any> {
    return this.http.post(`${this.url}/signup`, userData, { withCredentials: true });
  }

  signOut(): Observable<any> {
    return this.http.post(`${this.url}/logout`, null);
  }

  getToken() {
    const token = localStorage.getItem('user');
    if (!isNullOrUndefined(token)) {
      return JSON.parse(token);
    }
    return null;
  }
}
