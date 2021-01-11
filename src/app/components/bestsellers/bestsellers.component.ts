import { Component, OnInit } from '@angular/core';
import { BestsellersService } from '../../services/bestsellers/bestsellers.service';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: []
})
export class BestsellersComponent implements OnInit {
  bestsellers = {
    listName: null,
    copyright: null,
    list: []
  };

  constructor(private bestsellersService: BestsellersService) { }

  ngOnInit(): void {
    this.getBestsellersData();
  }

  getBestsellersData(): void {
    this.bestsellersService.getBestsellersData()
      .subscribe(data => {
        this.bestsellers = {
          listName: data.results.list_name,
          copyright: data.copyright,
          list: data.results.books
        };
      });
  }
}
