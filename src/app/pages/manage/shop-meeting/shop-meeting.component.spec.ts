import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopMeetingComponent } from './shop-meeting.component';

describe('ShopMeetingComponent', () => {
  let component: ShopMeetingComponent;
  let fixture: ComponentFixture<ShopMeetingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopMeetingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopMeetingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
