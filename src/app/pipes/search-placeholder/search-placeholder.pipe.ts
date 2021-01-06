import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPlaceholder'
})
export class SearchPlaceholderPipe implements PipeTransform {

  transform(searchTarget: string): string {
    if (searchTarget === 'author') {
      return 'Put authors Name and Lastname';
    } else if (searchTarget === 'isbn') {
      return 'Put books ISBN number';
    } else {
      return 'Put books title';
    }
  }
}
