import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-global-nav-bar',
  template: `
    <div class="w3-bar w3-light-gray">
    <a class="w3-bar-item w3-button w3-hover-black" routerLink="{{item.url}}" routerLinkActive="active"
       *ngFor="let item of menuItems;">{{item.keyword}}</a>
    <div class="w3-dropdown-hover">
      <button class="w3-button" (click)="dropDownChange()">
        Book<i class="fa fa-caret-down"></i>
      </button>
      <div [ngClass]="dropDown ? 'w3-dropdown-content w3-bar-block w3-card w3-show':'w3-dropdown-content w3-bar-block w3-card'">
        <a *ngFor="let child of dropDownChild; let i = index" routerLink="{{child.url}}" class="w3-bar-item w3-button">{{child.keyword}}</a>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./global-nav-bar.component.css']
})
export class GlobalNavBarComponent implements OnInit {


  menuItems: object[] =
    [
      {keyword: 'Data-bind', url: 'multi'},
      {keyword: 'Test Lock', url: 'lock'},
      {keyword: 'New Book', url: 'write'},
    ];
  dropDown: boolean;
  dropDownChild: object[] = [
    {keyword: 'Static View', url: 'list'},
    {keyword: 'All list', url: 'list2'},
    {keyword: 'Page list', url: 'list3'}
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
