import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellersLoadingComponent } from './bestsellers-loading.component';

describe('BestsellersLoadingComponent', () => {
  let component: BestsellersLoadingComponent;
  let fixture: ComponentFixture<BestsellersLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsellersLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellersLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
