import { Component, OnInit } from '@angular/core';
import {Book} from "../Model/BookModel";
import {HttpService} from "../Services/RestApiService";

@Component({
  selector: 'app-book-list-view2',
  templateUrl: './book-list-view2.component.html',
  styleUrls: ['./book-list-view2.component.css']
})
export class BookListView2Component implements OnInit {
  title : string;
  bookModel: Book[];
  DATE_FORMAT = 'yyyy.MM.dd HH:mm:ss';

  constructor(private httpClientService: HttpService) {
    this.title = 'Book List All';
    this.onLoad();
  }

  ngOnInit() {
    // this.onLoad();
  }


  reLoad() {

    if(this.bookModel !== null){
      alert('이미 데이터가 있는데요');
      return;
    }
    this.onLoad();
  }

  onLoad(){
    this.httpClientService.getBookAll().subscribe(
      result => this.bookModel = result.reverse(),
      error => alert('Server Is Die')
    );
  }


  clearAll() {
    this.bookModel = null;
  }
}
