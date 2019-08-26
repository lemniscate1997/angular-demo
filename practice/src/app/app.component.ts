import { Component } from '@angular/core';
import { ActivatedRoute, Router, ActivatedRouteSnapshot, NavigationStart, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { isUndefined } from 'util';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private route: ActivatedRoute, private titleService: Title, private router: Router) { }
  sidebar = true;
  navbar = true;

  private lastChild(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    if (route.firstChild) {
      return this.lastChild(route.firstChild);
    } else {
      return route;
    }
  }

  changeOfRoute() {
    const child = this.lastChild(this.route.snapshot);
    const title = child.data.title || 'My App';
    this.sidebar = isUndefined(child.data.sidebar) ? true : child.data.sidebar;
    this.navbar = isUndefined(child.data.navbar) ? true : child.data.navbar;
    this.titleService.setTitle(title);
  }
}
