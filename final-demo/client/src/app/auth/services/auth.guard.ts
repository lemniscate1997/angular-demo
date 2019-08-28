import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authSevice: AuthenticationService) { }

  canActivate(): boolean {
    if (!!this.authSevice.getToken()) {
      return true;
    } else {
      window.location.href = 'http://localhost:4200/';
      return false;
    }
  }
}
