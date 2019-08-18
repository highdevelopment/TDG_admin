import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundingDayComponent } from './rounding-day.component';

describe('RoundingDayComponent', () => {
  let component: RoundingDayComponent;
  let fixture: ComponentFixture<RoundingDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundingDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundingDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
