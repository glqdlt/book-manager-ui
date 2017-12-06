import {Component, OnInit, Output} from '@angular/core';
import {Book} from "../Model/BookModel";
import {HttpServiceService} from "../http-service.service";

@Component({
  selector: 'app-book-list-view3',
  templateUrl: './book-list-view3.component.html',
  styleUrls: ['./book-list-view3.component.css']
})
export class BookListView3Component implements OnInit {
  DATE_FORMAT = 'yyyy.MM.dd HH:mm:ss';

  title: string;
  private bookModel: Book[];
   page: number;
  private count: number;

  constructor(private httpClientService: HttpServiceService) {
    this.title = 'Book list! 3';
    this.page = 1;
    this.onLoad(this.page);
  }


  ngOnInit() {
  }


  reLoad() {
    if (this.bookModel !== null) {
      alert('이미 데이터가 있는데요');
      return;
    }
    this.onLoad(this.page);
  };



  onLoad(page: number) {
    this.httpClientService.gerRealDatasPaging(page).subscribe(
      result => (
        this.bookModel = result['data'], this.count = result['count']),
      error => alert('음 서버 상태가 메롱하네요.. 다시 시도해보세요')
    );
  };

  clearAll() {
    this.bookModel = null;
  };


  pageUp() {
    this.page++;
    this.onLoad(this.page);
  }

  pageDown() {
    this.page--;
    this.onLoad(this.page);
  }

}
