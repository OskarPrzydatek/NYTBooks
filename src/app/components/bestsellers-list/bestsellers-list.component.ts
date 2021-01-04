import { Component, OnInit } from '@angular/core';
import { BestsellersListService } from '../../services/bestsellers-list/bestsellers-list.service';

@Component({
  selector: 'app-bestsellers-list',
  templateUrl: './bestsellers-list.component.html',
  styleUrls: ['./bestsellers-list.component.scss']
})
export class BestsellersListComponent implements OnInit {
  bestsellers: any[];

  constructor(private bestsellersList: BestsellersListService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.bestsellersList.getList()
      .subscribe(list => (this.bestsellers = list.results.books));
  }
}
