import {Component, OnInit} from '@angular/core';
import {HttpService} from "../Services/HttpService";
import {Book} from "../Model/BookModel";

@Component({
  selector: 'app-book-list-view',
  templateUrl: './book-list-view.component.html',
  styleUrls: ['./book-list-view.component.css']
})
export class BookListViewComponent implements OnInit {

  title;

  dummyData: object[];
  DATE_FORMAT = 'yyyy.MM.dd HH:mm:ss';

  bookModel: Book;

  constructor(private Httpservice: HttpService) {

    this.dummyData = this.Httpservice.getDummyDatas();
    this.title = 'Book list!';
  }

  ngOnInit() {
    this.bookModel = this.Httpservice.getRealDatas();
  }

}
