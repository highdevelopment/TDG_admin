import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsReqComponent } from './as-req.component';

describe('AsReqComponent', () => {
  let component: AsReqComponent;
  let fixture: ComponentFixture<AsReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
