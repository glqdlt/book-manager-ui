import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Book} from "../Model/BookModel";
import {Router} from "@angular/router";
import {UrlListService} from "../Services/UrlListService";
import {HttpService} from "../Services/HttpService";

@Component({
  selector: 'app-write-book',
  templateUrl: './write-book.component.html',
  styleUrls: ['./write-book.component.css']
})
export class WriteBookComponent implements OnInit {

  bookModel: Book;
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
  private url: string;
  private httpService: HttpService;

  constructor(httpService: HttpService, route: Router, urlList: UrlListService) {

    this.route = route;
    this.url = urlList.BOOK_SERVER_URL + '/book/wirte';
    this.httpService = httpService;

  }

  ngOnInit() {
  }


  clickSubmit(f: NgForm) {
    this.bookModel = this.valueMaker(f);
    this.httpService.bookWrtie(this.bookModel).subscribe();
    alert('전송 되었습니다');
    this.route.navigate(['/list3']);
  }


  valueMaker(f: NgForm): Book {
    f.value.update_date = new Date();
    f.value.reg_date = new Date();
    f.value.reg_id = 'Admin';
    return f.value;
  }


}
