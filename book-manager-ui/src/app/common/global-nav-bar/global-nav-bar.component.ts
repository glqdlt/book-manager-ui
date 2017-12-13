import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-global-nav-bar',
  templateUrl : './global-nav-bar.component.html',
  styleUrls: ['./global-nav-bar.component.css']
})
export class GlobalNavBarComponent implements OnInit {


  menuItems: object[] =
    [
      {keyword: 'Home', url: ''}
    ];

  bookMenu: object[] = [
    {keyword: 'List', url: 'book'},
    {keyword: 'New', url: 'book/write'}
  ];

  serverManagerMenu: object[] = [
    {keyword : 'Management', url: 'server'},
    {keyword : 'Add Server', url :'server/add'}
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
