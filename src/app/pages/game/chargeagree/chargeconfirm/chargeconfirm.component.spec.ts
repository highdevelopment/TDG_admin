import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChargeconfirmComponent } from './chargeconfirm.component';

describe('ChargeconfirmComponent', () => {
  let component: ChargeconfirmComponent;
  let fixture: ComponentFixture<ChargeconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChargeconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChargeconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
