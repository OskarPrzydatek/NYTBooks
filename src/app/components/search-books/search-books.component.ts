import { Component, OnInit } from '@angular/core';
import {SearchBooksService} from '../../services/search-books/search-books.service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {
  foundBooks: any[];
  targetURL: string;
  searchForm;

  constructor(private searchBooks: SearchBooksService,
              private formBuilder: FormBuilder) {
    this.searchForm = this.formBuilder.group({
      searchTarget: '',
      searchValue: ''
    });
  }

  ngOnInit(): void { }

  onSubmit(value): void {
    this.buildTarget(value);
    this.search();
  }

  search(): void {
    this.searchBooks.search(this.targetURL)
      .subscribe(list => (this.foundBooks = list.results));
  }

  buildTarget(value): string {
    console.log(value);
    return this.targetURL = `${value.searchTarget}=${value.searchValue.toString().replace(/\\s/g, '+').toLowerCase()}`;
  }
}
