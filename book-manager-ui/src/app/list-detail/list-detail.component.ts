import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpService} from "../Services/HttpService";
import {Book} from "../Model/BookModel";

@Component({
  selector: 'app-list-detail',
  templateUrl: './list-detail.component.html',
  styleUrls: ['./list-detail.component.css']
})
export class ListDetailComponent implements OnInit {
  httpService: HttpService;

  bookID : number;
  private bookModel: Book;

  constructor(route : ActivatedRoute, httpService : HttpService) {
    this.httpService = httpService;
    this.bookID = route.snapshot.params['id'];
    this.bookModel = new Book;
  }

  ngOnInit() {
    this.onLoad();
  }

  onLoad(){
    this.httpService.getDetail(this.bookID).subscribe(
      res => (
      this.bookModel = res,
        console.log(this.bookModel)
    ),
      error => alert('음 서버 상태가 메롱하네요.. 다시 시도해보세요')
    );
  }


  notFunction() {
    alert('구현 안됨');
  }
}
