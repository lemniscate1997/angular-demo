import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  url = `${environment.backendEndpoint}/auth`;
  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: ban-types
  validateUser(userName: String, password: String): Observable<any> {
    return this.http.post(`${this.url}/login`, { Username: userName, Password: password});
  }
}
