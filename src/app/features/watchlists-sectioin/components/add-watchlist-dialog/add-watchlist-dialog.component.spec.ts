import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWatchlistDialogComponent } from './add-watchlist-dialog.component';

describe('AddWatchlistDialogComponent', () => {
  let component: AddWatchlistDialogComponent;
  let fixture: ComponentFixture<AddWatchlistDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWatchlistDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWatchlistDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
