import { TestBed } from '@angular/core/testing';

import { BooksListService } from './books-list.service';

describe('ListOfBooksService', () => {
  let service: BooksListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
