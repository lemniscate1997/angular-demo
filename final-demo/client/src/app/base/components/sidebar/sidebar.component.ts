import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseService } from '../../services/base.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user: any;
  imageIcon: any;
  selectedItem = 1;
  constructor(private router: Router, private baseService: BaseService) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.imageIcon = this.user.name.charAt(0).toUpperCase();
    this.selectSidebar();
  }

  toggleactiveMenu(i) {
    this.selectedItem = i;
  }

  selectSidebar() {
    this.baseService.changeOfRoutesBehaviourSubject.subscribe(currentUrl => {
      if (currentUrl === '/dashboard') {
        this.selectedItem = 1;
      } else if (currentUrl.includes('student')) {
        this.selectedItem = 2;
      }
    });
  }

  navigateToDashboard() {
    this.router.navigate(['/dashboard']);
  }

  navigateToStudent() {
    this.router.navigate(['/list-student']);
  }
}
