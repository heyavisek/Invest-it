import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatchlistsSectioinComponent } from './watchlists-sectioin.component';

describe('WatchlistsSectioinComponent', () => {
  let component: WatchlistsSectioinComponent;
  let fixture: ComponentFixture<WatchlistsSectioinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WatchlistsSectioinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatchlistsSectioinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
