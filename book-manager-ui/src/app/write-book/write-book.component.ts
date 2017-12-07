import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Book} from "../Model/BookModel";
import {Router} from "@angular/router";

@Component({
  selector: 'app-write-book',
  templateUrl: './write-book.component.html',
  styleUrls: ['./write-book.component.css']
})
export class WriteBookComponent implements OnInit {

  bookModel : Book;
  FORM_DATA: object[] = [
    {type: 'text', label: 'subject'},
    {type: 'text', label: 'author'},
    {type: 'text', label: 'note'},
    {type: 'number', label: 'book_type'},
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

  constructor(private httpClient : HttpClient, route : Router) {

    this.route = route;
  }

  ngOnInit() {
  }



  clickSubmit(f : NgForm) {
    this.bookModel = this.valueMaker(f);
    this.httpClient.put('http://127.0.0.1:38080/book/write',this.bookModel).subscribe();
    alert('전송 되었습니다');
    this.route.navigate(['/list3']);
  }



  valueMaker(f:NgForm) : Book{
    f.value.update_date = new Date();
    f.value.reg_date = new Date();
    f.value.reg_id = 'Admin';
    return f.value;
  }



}
