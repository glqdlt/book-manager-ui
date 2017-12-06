import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-global-nav-bar',
  templateUrl: './global-nav-bar.component.html',
  styleUrls: ['./global-nav-bar.component.css']
})
export class GlobalNavBarComponent implements OnInit {

  menuItems: object[] =
    [
      {keyword: 'Multi', url: 'multi'},
      {keyword: 'Lock', url: 'lock'},
      {keyword: 'Write', url: 'write'},
      {keyword: 'List', url: 'list'},
      {keyword: 'List2', url: 'list2'},
      {keyword: 'List3', url: 'list3'}
    ];

  constructor() {
  }

  ngOnInit() {
  }

}
