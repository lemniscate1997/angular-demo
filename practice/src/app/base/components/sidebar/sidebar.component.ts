import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  @Input() data;
  sidebar = 'Sidebar content';
  constructor() {
    console.log("+++++++++++++++++++"+this.data);
    
   }

  ngOnInit() {
  }

}
