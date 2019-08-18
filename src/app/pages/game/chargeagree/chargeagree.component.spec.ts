import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeagreeComponent } from './chargeagree.component';

describe('ChargeagreeComponent', () => {
  let component: ChargeagreeComponent;
  let fixture: ComponentFixture<ChargeagreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeagreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeagreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
