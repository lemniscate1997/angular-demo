import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from './base/services/base.service';
import { AuthenticationService } from './auth/services/authentication.service';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showBar: boolean;
  constructor(private route: Router, private baseService: BaseService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }

  changeOfRoutes() {
    if (this.route.url === '/' || this.route.url === '/login' || this.route.url === '/register') {
      this.showBar = false;
      if (!isNullOrUndefined(this.authenticationService.getToken())) {
        // tslint:disable-next-line: no-unused-expression
        this.route.navigateByUrl('/dashboard');
      }
    } else {
      this.showBar = true;
      this.baseService.setRoutes(this.route.url);
    }
  }
}
