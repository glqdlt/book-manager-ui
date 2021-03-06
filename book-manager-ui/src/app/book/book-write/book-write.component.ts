import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Book} from "../../model/BookModel";
import {Router} from "@angular/router";
import {RestApiService} from "../../services/RestApiService";
import {Location} from "@angular/common";
import {GetLoginUserService} from "../../services/GetLoginUserService";

@Component({
  selector: 'app-book-write',
  templateUrl: './book-write.component.html',
  styleUrls: ['./book-write.component.css']
})
export class WriteBookComponent implements OnInit {


  set userLeave(bool: boolean) {
    this._userLeave = bool;
  }

  get userLeave(): boolean {
    return this._userLeave;
  }

  bookModel: Book;
  FORM_DATA: object[] = [
    {type: 'text', label: 'subject'},
    {type: 'text', label: 'author'},
    {type: 'text', label: 'note'},
    // {type: 'number', label: 'book_type'},
    // {type: 'text', label: 'path'},
    // {type: 'text', label: 'server_name'},
    // {type: 'text', label: 'reg_id'},
    // {type: 'text', label: 'future_date'},
    // {type: 'text', label: 'reg_date'},
    // {type: 'text', label: 'update_date'},
    // {type: 'text', label: 'read_status'},
    // {type: 'text', label: 'review_url'}
  ];

  private route: Router;
  private httpService: RestApiService;
  private _userLeave: boolean;

  constructor(restApiService: RestApiService, route: Router, private _location: Location, private userLogin : GetLoginUserService) {

    this.route = route;
    this.httpService = restApiService;
    this._userLeave = false;

  }

  ngOnInit() {
  }

  clickSubmit(form: NgForm) {
    this.bookModel = this.valueMaker(form);
    this.httpService.putBook(this.bookModel).subscribe(ob => (
        this._userLeave = true,
          console.log(`observe : ${ob}`),
          alert('Done!'),
          this.route.navigate(['/list'])
      ), err => (
          console.error(`error : ${err}`),
          this._userLeave = false,
          alert('Server Problem!')
      )
    );
  }

  valueMaker(form: NgForm): Book {
    form.value.update_date = new Date();
    form.value.reg_date = new Date();
    form.value.reg_id = this.userLogin.getUserId();
    return form.value;
  }

  clickBack() {
    this._userLeave = true;
    this._location.back();
  }
}
