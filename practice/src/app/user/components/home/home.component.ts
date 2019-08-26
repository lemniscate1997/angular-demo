import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  value = 10000;
  pi = 3.14;
  today = Date.now();
  now = moment();
  constructor(private route: ActivatedRoute) {
    console.log(this.route.snapshot.data);
  }

  ngOnInit() {
  }

}
