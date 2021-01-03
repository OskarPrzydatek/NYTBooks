import {Component, OnInit} from '@angular/core';
import {SearchBooksService} from '../../services/search-books/search-books.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-books',
  templateUrl: './search-books.component.html',
  styleUrls: ['./search-books.component.css']
})
export class SearchBooksComponent implements OnInit {
  foundArticles = [];
  targetURL: string;
  searchForm: FormGroup;
  submit = false;

  constructor(private searchBooks: SearchBooksService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.searchForm = this.formBuilder.group({
      searchTarget: ['author', Validators.required],
      searchValue: ['', Validators.compose([
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(20)])
      ]
    });

    console.log(this.foundArticles);
  }



  onSubmit(value): void {
    this.submit = true;
    // this.cleanArticles();
    this.buildTarget(value);
    this.search();
    console.log(this.foundArticles);
  }

  search(): void {
    this.searchBooks.search(this.targetURL)
      .subscribe(list => (this.foundArticles = list.results));
  }

  buildTarget(value): string {
    console.log(value);
    return this.targetURL = `${value.searchTarget}=${value.searchValue.toString().replace(/\\s/g, '+').toLowerCase()}`;
  }

  cleanArticles(): any {
    if (this.foundArticles.length > 0) {
      return this.foundArticles = [];
    }
    return;
  }
}
