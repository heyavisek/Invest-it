import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicesViewSectionComponent } from './indices-view-section.component';

describe('IndicesViewSectionComponent', () => {
  let component: IndicesViewSectionComponent;
  let fixture: ComponentFixture<IndicesViewSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicesViewSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicesViewSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
