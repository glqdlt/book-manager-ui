import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login-component',
  styleUrls: ['./login-component.css'],
  templateUrl : './login-component.html'
})
export class LoginComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    console.log('hello');
  }

}
