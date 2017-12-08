import { Injectable } from '@angular/core';

@Injectable()
export class UrlListService {

 BOOK_SERVER_URL : string = 'http://127.0.0.1:38080';

  // SURFIX_BOOK_WRITE_URL : string = '/book/write';
  // SURFIX_LIST_URL : string = 'book/search/';
  constructor() {

  }

}
