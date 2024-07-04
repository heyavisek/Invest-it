import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicesLargeBoxComponent } from './indices-large-box.component';

describe('IndicesLargeBoxComponent', () => {
  let component: IndicesLargeBoxComponent;
  let fixture: ComponentFixture<IndicesLargeBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicesLargeBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicesLargeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
