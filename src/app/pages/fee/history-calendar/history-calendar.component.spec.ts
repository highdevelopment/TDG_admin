import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryCalendarComponent } from './history-calendar.component';

describe('HistoryCalendarComponent', () => {
  let component: HistoryCalendarComponent;
  let fixture: ComponentFixture<HistoryCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
