import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private active: ActivatedRoute) {
    console.log(active.snapshot.data);
    console.log(active);
  }

  ngOnInit() {
  }

}
