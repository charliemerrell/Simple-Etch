import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllCardsComponent } from './view-all-cards.component';

describe('ViewAllCardsComponent', () => {
  let component: ViewAllCardsComponent;
  let fixture: ComponentFixture<ViewAllCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAllCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
