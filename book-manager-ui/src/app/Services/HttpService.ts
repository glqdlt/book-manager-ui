import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UrlListService} from "./UrlListService";
import {NgForm} from "@angular/forms";
import {Book} from "../Model/BookModel";

@Injectable()
export class HttpService {

  private URL: string;

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

  constructor(private httpClient: HttpClient, urlList : UrlListService) {
    this.URL = urlList.BOOK_SERVER_URL;
  }

  getDummyDatas() {
    return this.dummyData;
  }

  getRealDatas(): any {
    return this.httpClient.get(this.URL + '/book/search/all');
  }

  gerRealDatasPaging(page:number): any {
    return this.httpClient.get(this.URL+'/book/search/'+page);
  }

  getDetail(id:number): any{
    return this.httpClient.get(this.URL+'/book/detail/'+id);
  }

  bookWrtie(book : Book) {
    return this.httpClient.put(this.URL+'/book/write',book);
  }

}
