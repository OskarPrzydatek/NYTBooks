import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellersListComponent } from './bestsellers-list.component';

describe('BooksListComponent', () => {
  let component: BestsellersListComponent;
  let fixture: ComponentFixture<BestsellersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsellersListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
