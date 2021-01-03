import { TestBed } from '@angular/core/testing';

import { SearchBooksArticlesService } from './search-books-articles.service';

describe('SearchBooksService', () => {
  let service: SearchBooksArticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchBooksArticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
