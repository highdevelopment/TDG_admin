import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventeditconfirmComponent } from './eventeditconfirm.component';

describe('EventeditconfirmComponent', () => {
  let component: EventeditconfirmComponent;
  let fixture: ComponentFixture<EventeditconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventeditconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventeditconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
