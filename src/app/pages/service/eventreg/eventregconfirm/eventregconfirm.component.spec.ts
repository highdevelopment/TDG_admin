import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventregconfirmComponent } from './eventregconfirm.component';

describe('EventregconfirmComponent', () => {
  let component: EventregconfirmComponent;
  let fixture: ComponentFixture<EventregconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventregconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventregconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
