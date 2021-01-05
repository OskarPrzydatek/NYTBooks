import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bestsellers-list',
  templateUrl: './bestsellers-list.component.html',
  styleUrls: ['./bestsellers-list.component.scss']
})
export class BestsellersListComponent implements OnInit {
  @Input() bestsellers;
  @Input() listInfo;

  constructor() { }

  ngOnInit(): void { }

}
