import { Injectable } from '@angular/core';

@Injectable()
export class GetLoginUserService {

  constructor() { }

  getUserId(){
    return 'admin';
  }

}
