import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockWatchlistComponent } from './stock-watchlist.component';

describe('StockWatchlistComponent', () => {
  let component: StockWatchlistComponent;
  let fixture: ComponentFixture<StockWatchlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockWatchlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockWatchlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
