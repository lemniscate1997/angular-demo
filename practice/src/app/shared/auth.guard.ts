import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  canActivate(route: ActivatedRouteSnapshot): boolean {
    console.log(route);
    return true;
  }

  canActivateChild(route: ActivatedRouteSnapshot): boolean {
    console.log(route);
    return true;
  }
}
