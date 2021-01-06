import { Component, OnInit } from '@angular/core';
import {BestsellersListService} from '../../services/bestsellers-list/bestsellers-list.service';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.scss']
})
export class BestsellersComponent implements OnInit {
  listInfo = [];
  bestsellers = [];

  constructor(private bestsellersList: BestsellersListService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.bestsellersList.getList()
      .subscribe(list => {
        this.listInfo.push(list.results);
        this.bestsellers = list.results.books;
      });
  }
}
