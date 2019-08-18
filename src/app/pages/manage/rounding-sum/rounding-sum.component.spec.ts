import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundingSumComponent } from './rounding-sum.component';

describe('RoundingSumComponent', () => {
  let component: RoundingSumComponent;
  let fixture: ComponentFixture<RoundingSumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundingSumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundingSumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
