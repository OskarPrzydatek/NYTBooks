import { Component, OnInit } from '@angular/core';
import {BooksListService} from '../../services/books-list/books-list.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {
  books: any[];

  constructor(private booksList: BooksListService) { }

  ngOnInit(): void {
    this.getList();
  }

  getList(): void {
    this.booksList.getList()
      .subscribe(list => (this.books = list.results.books));
  }
}
