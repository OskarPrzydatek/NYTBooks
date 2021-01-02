import { TestBed } from '@angular/core/testing';

import { BestsellersListService } from './bestsellers-list.service';

describe('ListOfBooksService', () => {
  let service: BestsellersListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BestsellersListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
