import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  list=[
    {
      num:1
    },
    {
      num:2
    },
    {
      num:3
    },
    {
      num:4
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
