import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysPracticeComponent } from './days-practice.component';

describe('DaysPracticeComponent', () => {
  let component: DaysPracticeComponent;
  let fixture: ComponentFixture<DaysPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
