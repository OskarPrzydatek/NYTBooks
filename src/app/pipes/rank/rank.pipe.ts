import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rank'
})
export class RankPipe implements PipeTransform {

  transform(rank: number, rankLastWeek: number): any {
    const result = rankLastWeek - rank;

    if (rankLastWeek === 0) {
      return `NEW`;
    }

    return (result >= 0) ? `+${result}` : result;
  }
}
