import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicesBoxComponent } from './indices-box.component';

describe('IndicesBoxComponent', () => {
  let component: IndicesBoxComponent;
  let fixture: ComponentFixture<IndicesBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndicesBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicesBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
