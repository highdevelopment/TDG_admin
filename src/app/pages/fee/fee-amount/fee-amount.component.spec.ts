import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeAmountComponent } from './fee-amount.component';

describe('FeeAmountComponent', () => {
  let component: FeeAmountComponent;
  let fixture: ComponentFixture<FeeAmountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeAmountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeAmountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
