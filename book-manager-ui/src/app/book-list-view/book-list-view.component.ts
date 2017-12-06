import {Component, OnInit} from '@angular/core';
import {HttpServiceService} from "../http-service.service";
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

  constructor(private Httpservice: HttpServiceService) {

    // 강제로 한번 객체 생성해서 set 해봄. ㅋㅋ
    // this.bookModel = new Book();
    // this.bookModel.subject = 'haha';

    this.dummyData = this.Httpservice.getDummyDatas();
    this.title = 'Book list!';
  }

  ngOnInit() {
    this.bookModel = this.Httpservice.getRealDatas();
  }

}
