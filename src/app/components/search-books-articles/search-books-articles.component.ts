import { Component, OnInit } from '@angular/core';
import { SearchBooksArticlesService } from '../../services/search-books-articles/search-books-articles.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-books-articles',
  templateUrl: './search-books-articles.component.html',
  styleUrls: ['./search-books-articles.component.scss']
})
export class SearchBooksArticlesComponent implements OnInit {
  foundArticles = [];
  targetURL: string;
  searchForm: FormGroup;

  constructor(private searchBooksArticles: SearchBooksArticlesService,
              private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchTarget: ['author', Validators.required],
      searchValue: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20)])
      ]
    });
  }

  onSubmit(value): void {
    this.buildTarget(value);
    this.search();
  }

  search(): void {
    this.searchBooksArticles.search(this.targetURL)
      .subscribe(list => (this.foundArticles = list.results));
  }

  buildTarget(value): string {
    console.log(value);
    return this.targetURL = `${value.searchTarget}=${value.searchValue.toString().replace(/\\s/g, '+').toLowerCase()}`;
  }
}
