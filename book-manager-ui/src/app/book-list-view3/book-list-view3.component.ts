import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../Model/BookModel";
import {HttpService} from "../Services/HttpService";
import {Observable} from "rxjs/rx";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-book-list-view3',
  templateUrl: './book-list-view3.component.html',
  styleUrls: ['./book-list-view3.component.css']
})
export class BookListView3Component implements OnInit, OnDestroy {
  DATE_FORMAT = 'yyyy.MM.dd HH:mm:ss';


  title: string;
  bookModel: Book[];

  nowPage: number;

  totalPage: number;
  maxPage: number;

  pagingRange;
  private subscribe: Subscription;


  constructor(private httpServiceService: HttpService) {
    this.title = 'Book List Page';
    // this.setFirstPageNumb();
    this.nowPage = 0;
    this.maxPage = 9;
    // this.onLoad(this.nowPage);
  }

  ngOnInit() {
    // Observable.timer(timer, period);
    this.subscribe = Observable.timer(0, 5000).subscribe(x => this.onLoad(this.nowPage), err => console.log(`err : ${{err}}`));
  }

  ngOnDestroy(): void {
    this.subscribe.unsubscribe();
  }


  reLoad() {
    if (this.bookModel !== null) {
      alert('이미 데이터가 있는데요');
      return;
    }
    this.onLoad(this.nowPage);
  };

  onLoad(nowPage: number) {
    console.log(nowPage);
    this.httpServiceService.gerRealDatasPaging(nowPage).subscribe(
      result => (
        this.bookModel = result['data'],
          this.totalPage = result['totalPage'],
          this.pagingMaker(this.totalPage),
          console.log('Data Succs')
      ),
      error => alert('음 서버 상태가 메롱하네요.. 다시 시도해보세요')
    )
  };

  clearAll() {
    this.bookModel = null;
  };

  alertEndPage() {
    alert('페이지의 끝입니다');
  }

  pageUp() {
    if (this.nowPage + 1 >= this.totalPage) {
      this.alertEndPage();
      return;
    }
    this.nowPage++;
    this.onLoad(this.nowPage);
  }

  pageDown() {
    if (this.nowPage - 1 < 0) {
      this.alertEndPage();
      return;
    }
    this.nowPage--;
    this.onLoad(this.nowPage);
  }

  onClickPaging(numb: number) {
    this.nowPage = numb;
    this.onLoad(this.nowPage);
  }

  private pagingMaker(total: number) {

    const range = Array();

    for (let i = 0; i < total; i++) {
      range.push(i);
    }


    this.pagingRange = range;
  }
}

