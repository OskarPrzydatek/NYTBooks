import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services/search/search.service';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';
import { ScrollerService } from '../../services/scroller/scroller.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [
    './search-style/search.component.scss',
    './search-style/search-radio-input.scss'
  ]
})
export class SearchComponent implements OnInit {
  searchResultData = {
    status: null,
    numberOfArticles: null,
    articles: []
  };
  targetURL: string;
  searchForm: FormGroup;
  isFirstSearch = false;

  constructor(private searchService: SearchService,
              private formBuilder: FormBuilder,
              private scrollerService: ScrollerService) {
  }

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
    this.isFirstSearch = true;
    this.buildTarget(value);
    this.search();
    this.searchResultDataCleaner();
  }

  buildTarget(value: any): string {
    return this.targetURL = this.searchService.buildTarget(value.searchTarget, value.searchValue);
  }

  search(): void {
    this.searchService.search(this.targetURL)
      .subscribe(data => {
        this.searchResultData = {
          status: data.status,
          numberOfArticles: data.num_results,
          articles: data.results
        };
      });
  }

  searchResultDataCleaner(): void {
    this.searchResultData = {
      status: null,
      numberOfArticles: null,
      articles: []
    };
  }

  smoothMove(target: string): void {
    this.scrollerService.smoothMove(target);
  }
}
