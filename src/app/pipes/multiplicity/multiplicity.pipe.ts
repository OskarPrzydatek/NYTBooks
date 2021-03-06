import { Pipe, PipeTransform } from '@angular/core';

// Pipe which check number of elements
// then change word (in depends) from single to plural form

@Pipe({
  name: 'multiplicity'
})
export class MultiplicityPipe implements PipeTransform {

  transform(numOfElements: number, word: string): any {
    return (numOfElements === 1) ? word : `${word}s`;
  }
}
