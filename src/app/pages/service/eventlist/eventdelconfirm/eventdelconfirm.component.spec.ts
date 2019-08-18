import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdelconfirmComponent } from './eventdelconfirm.component';

describe('EventdelconfirmComponent', () => {
  let component: EventdelconfirmComponent;
  let fixture: ComponentFixture<EventdelconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventdelconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdelconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
