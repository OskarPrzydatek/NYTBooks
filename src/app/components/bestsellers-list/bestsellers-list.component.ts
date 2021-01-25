import { Component, Input, OnInit } from '@angular/core';
import { RankColors } from './rank-colors';
import { BestsellersService } from '../../services/bestsellers/bestsellers.service';

@Component({
  selector: 'app-bestsellers-list',
  templateUrl: './bestsellers-list.component.html',
  styleUrls: ['./bestsellers-list.component.scss']
})
export class BestsellersListComponent implements OnInit {
  @Input() bestsellersList;
  @Input() listName;
  @Input() copyright;

  constructor(private bestsellersService: BestsellersService) { }

  ngOnInit(): void { }

  rankStyle(condition: number): string {
    return this.bestsellersService.rankStyle(condition, RankColors);
  }

  rankBolt(condition: string): number {
    return (condition === 'NEW' || condition === 'BACK!') ? 400 : 900;
  }
}
