import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lock-page-comp',
  templateUrl: './lock-page-comp.component.html',
  styleUrls: ['./lock-page-comp.component.css']
})
export class LockPageCompComponent implements OnInit {
  lockTitle: string;

  constructor() {
    this.lockTitle = '나는 잠겼다!';

  }

  ngOnInit() {
    console.log('sub-page-는 과연 렌더링 되었을까요?');
  }

}
