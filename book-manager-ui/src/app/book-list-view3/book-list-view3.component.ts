import {Component, OnDestroy, OnInit} from '@angular/core';
import {Book} from "../Model/BookModel";
import {HttpService} from "../HttpService";
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
  count: number;
  pagingRange;
  private subscribe: Subscription;


  constructor(private httpServiceService: HttpService) {
    this.title = 'Book List Page';
    this.setFirstPageNumb();
    this.onLoad(this.nowPage);
  }

  setFirstPageNumb(numb: number = 0) {
    this.nowPage = numb;
  }


  ngOnInit() {
    // Observable.timer(timer, period);
   this.subscribe = Observable.timer(0,5000).subscribe( x => this.onLoad(this.nowPage), err => console.log(`err : ${{err}}`));
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
          this.count = result['count'],
          this.pagingMaker(this.count),
          console.log('Data Succs')
      ),
      error => alert('음 서버 상태가 메롱하네요.. 다시 시도해보세요')
    )
    ;
  };

  clearAll() {
    this.bookModel = null;
  };


  pageUp() {
    this.nowPage++;
    this.onLoad(this.nowPage);
  }

  pageDown() {
    this.nowPage--;
    this.onLoad(this.nowPage);
  }

  pagePush(numb: number) {
    this.nowPage = numb;
    this.onLoad(this.nowPage);
  }

  private pagingMaker(count: number) {

    const range = Array();
    for (let i = 0; i < count; i++) {
      range.push(i);
    }

    this.pagingRange = range;
  }
}

