import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bookType'
})
export class BookTypePipe implements PipeTransform {

  transform(value: number): any {

    switch (value) {
      case 1 :
        return '자기개발'
      case 2:
        return '전공:개발';
      default :
        return '이건뭐여';
    }
  }

}
