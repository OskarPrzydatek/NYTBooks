import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  header = 'ABOUT';
  about = 'The portfolio WebApp powered by ';
  link = 'The Ney York Times API';

  constructor() { }

  ngOnInit(): void {
  }

}
