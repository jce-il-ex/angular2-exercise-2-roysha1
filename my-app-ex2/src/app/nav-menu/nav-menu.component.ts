import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  myList = [{
    id : 1,
    name : 'Home'
  },{
    id : 2,
    name : 'Contact'
  },{
    id : 3,
    name : 'Featuers'
  },{
    id : 4,
    name : 'Sign In'
  }
  ]

  constructor() { }

  ngOnInit() {
  }

}
