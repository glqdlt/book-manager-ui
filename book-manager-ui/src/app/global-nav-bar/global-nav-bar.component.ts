import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-global-nav-bar',
  templateUrl : './global-nav-bar.component.html',
  styleUrls: ['./global-nav-bar.component.css']
})
export class GlobalNavBarComponent implements OnInit {


  menuItems: object[] =
    [
      // {keyword: 'Data-bind', url: 'multi'},
      // {keyword: 'Test Lock', url: 'lock'},
      // {keyword: 'New Book', url: 'write'},
      {keyword: 'Home', url: ''},
    ];
  dropDown: boolean;

  dropDownChild: object[] = [
    // {keyword: 'Static View', url: 'list'},
    // {keyword: 'All list', url: 'list2'},
    {keyword: 'Book list', url: 'list3'}
  ];

  constructor() {
    this.dropDown = false;
  }

  ngOnInit() {
  }

  dropDownChange() {
    if(this.dropDown){
      this.dropDown = false;
      return;
    }
    this.dropDown = true;
  }
}
