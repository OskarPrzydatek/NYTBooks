import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBooksArticlesComponent } from './search-books-articles.component';

describe('SearchBooksComponent', () => {
  let component: SearchBooksArticlesComponent;
  let fixture: ComponentFixture<SearchBooksArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchBooksArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBooksArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
