import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyCommodityComponent } from './currency-commodity.component';

describe('CurrencyCommodityComponent', () => {
  let component: CurrencyCommodityComponent;
  let fixture: ComponentFixture<CurrencyCommodityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrencyCommodityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurrencyCommodityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
