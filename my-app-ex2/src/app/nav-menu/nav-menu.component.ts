import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  myList = [{
    id : 1,
    name : 'home'
  },{
    id : 2,
    name : 'contact'
  },{
    id : 3,
    name : 'just page'
  },{
    id : 4,
    name : 'page 2'
  }
  ]

  constructor() { }

  ngOnInit() {
  }

}
