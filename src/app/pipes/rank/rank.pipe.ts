import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rank'
})
export class RankPipe implements PipeTransform {

  transform(rank: number, rankLastWeek: number, weeksOnList: number): any {
    const result = rankLastWeek - rank;

    /*if (rankLastWeek === 0) {
      return `NEW`;
    } else if (rankLastWeek === 0 && weeksOnList > 1) {
      return  `BACK`;
    }*/

    console.log(`weeksOnList: ${weeksOnList} rankLastWeek: ${rankLastWeek}`);

    if (weeksOnList > 1 && rankLastWeek === 0) {
      return  `BACK!`;
    } else if (rankLastWeek === 0) {
      return `NEW`;
    }

    return (result >= 0) ? `+${result}` : result;
  }
}
