import { Component, Input, OnInit } from '@angular/core';
import {RankColors} from './rank-colors';

@Component({
  selector: 'app-bestsellers-list',
  templateUrl: './bestsellers-list.component.html',
  styleUrls: ['./bestsellers-list.component.scss']
})
export class BestsellersListComponent implements OnInit {
  @Input() bestsellers;
  @Input() listInfo;
  rankColors: RankColors = {
    up: '#527964',
    stay: '#262626',
    down: '#D56A60'
  };

  constructor() { }

  ngOnInit(): void { }

  rankStyle(condition: number): string {
    return (condition > 0) ? `${this.rankColors.up}`
      : (condition < 0) ? `${this.rankColors.down}` : `${this.rankColors.stay}`;
  }
}
