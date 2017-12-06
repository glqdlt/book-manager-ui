import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Book} from "./book-list-view/BookModel";
import {Observable} from "rxjs/Observable";

@Injectable()
export class HttpServiceService {

  dummyData: object[] = [{
    "no": 1,
    "subject": "subject0",
    "author": "author0",
    "book_type": 2,
    "note": "note0",
    "path": "path0",
    "server_name": "server10",
    "reg_id": "admin0",
    "future_date": 1512527209207,
    "reg_date": 1512527209207,
    "update_date": 1512527209207,
    "read_status": 1,
    "thumbnail_url": "thumb",
    "review_url": "review"
  }, {
    "no": 2,
    "subject": "subject1",
    "author": "author1",
    "book_type": 2,
    "note": "note1",
    "path": "path1",
    "server_name": "server11",
    "reg_id": "admin1",
    "future_date": 1512527209207,
    "reg_date": 1512527209207,
    "update_date": 1512527209207,
    "read_status": 1,
    "thumbnail_url": "thumb",
    "review_url": "review"
  }];

  constructor(private httpClient : HttpClient) { }

  getDummyDatas(){
    return this.dummyData;
  }

  getRealDatas() : any{

    return this.httpClient.get('http://127.0.0.1:38080/book/search/all');
    // 이렇게하면 async로 되어서 빈 data를 일단 던지고 봐서 문제가 된다.
    // this.httpClient.get('http://127.0.0.1:38080/book/search/all').subscribe(data =>{
    // console.log(data); // 여기에는 데이터가 출력되지만 Component 에는 이게 찍히기전에 return data; 해버림
    //   return data;
    // });
  }

}
