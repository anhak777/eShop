import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: any[], field: string = 'id'): any {
    return array.sort((a, b) => a[field] - b[field])
  }
}



//  return array.sort((a: any, b: any) => {
  //     if (typeof a[field] === 'string') {
  //       if (a[field] < b[field]) {
  //         return -1;
  //       } else if (a[field] > b[field]) {
  //         return 1;
  //       } else {
  //         return 0;
  //       }
  //     }
  //     else if (typeof a[field] === 'number') {
  //       if (a[field] < b[field]) {
  //         return -1;
  //       } else if (a[field] > b[field]) {
  //         return 1;
  //       } else {
  //         return 0;
  //       }
  //     }
  //   });