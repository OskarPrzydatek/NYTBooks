import { Component, OnInit } from '@angular/core';
import { SearchBooksArticlesService } from '../../services/search-books-articles/search-books-articles.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-search-books-articles',
  templateUrl: './search-books-articles.component.html',
  styleUrls: ['./search-books-articles.component.scss']
})
export class SearchBooksArticlesComponent implements OnInit {
  foundArticles = [];
  // [0] - http.status, [1] - num of results
  articlesData = [];
  targetURL: string;
  searchForm: FormGroup;
  start = false;

  constructor(private searchBooksArticles: SearchBooksArticlesService,
              private formBuilder: FormBuilder,
              private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchTarget: ['author', Validators.required],
      searchValue: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1)])
      ]
    });
  }

  onSubmit(value: any): void {
    this.start = true;
    this.articlesDataCleaner();
    this.buildTarget(value);
    this.search();
  }

  search(): void {
    this.searchBooksArticles.search(this.targetURL)
      .subscribe(list => {
        this.foundArticles = list.results;
        this.articlesData.push(list.status, list.num_results);
      });
  }

  buildTarget(value: any): string {
    return this.targetURL = `${value.searchTarget}=${value.searchValue
      .toString()
      .replace(/\\s/g, '+')
      .toLowerCase()}`;
  }

  articlesDataCleaner(): void {
    if (this.articlesData.length !== 0) {
      this.articlesData = [];
    }
  }

  toResultScroll(indicator: string): void {
      this.viewportScroller.scrollToAnchor(indicator);
  }
}
