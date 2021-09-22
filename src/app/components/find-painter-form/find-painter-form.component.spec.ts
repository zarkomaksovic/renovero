import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPainterFormComponent } from './find-painter-form.component';

describe('FindPainterFormComponent', () => {
  let component: FindPainterFormComponent;
  let fixture: ComponentFixture<FindPainterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPainterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPainterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
