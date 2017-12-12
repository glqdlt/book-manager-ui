import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UrlListService} from "./UrlListService";
import {Book} from "../Model/BookModel";

@Injectable()
export class HttpService {

  private URL: string;


  constructor(private httpClient: HttpClient, urlList : UrlListService) {
    this.URL = urlList.BOOK_SERVER_URL;
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
