import { Component, OnInit } from '@angular/core';
import { BestsellersService } from '../../services/bestsellers/bestsellers.service';

@Component({
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: []
})
export class BestsellersComponent implements OnInit {
  bestsellers = {
    list: [],
    info: []
  };

  constructor(private bestsellersService: BestsellersService) { }

  ngOnInit(): void {
    this.getBestsellersData();
  }

  getBestsellersData(): void {
    this.bestsellersService.getBestsellersData()
      .subscribe(data => {
        this.bestsellers = {
          list: data.results.books,
          info: data.results
        };
      });
  }
}
