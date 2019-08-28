import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class BaseService {
  isOpened = true;
  changeOfRoutesBehaviourSubject = new BehaviorSubject<any>('/');

  constructor(private http: HttpClient) { }

  setRoutes(routes: string) {
    this.changeOfRoutesBehaviourSubject.next(routes);
  }
}
