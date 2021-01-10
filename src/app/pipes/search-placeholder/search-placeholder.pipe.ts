import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPlaceholder'
})
export class SearchPlaceholderPipe implements PipeTransform {

  transform(searchTarget: string): string {
    if (searchTarget === 'author') {
      return 'Put authors Name and Lastname';
    }

    return (searchTarget === 'isbn') ? 'Put books ISBN number' : 'Put books title';
  }
}
