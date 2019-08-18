import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPointComponent } from './s-point.component';

describe('SPointComponent', () => {
  let component: SPointComponent;
  let fixture: ComponentFixture<SPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
