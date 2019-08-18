import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputfeeComponent } from './inputfee.component';

describe('InputfeeComponent', () => {
  let component: InputfeeComponent;
  let fixture: ComponentFixture<InputfeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputfeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputfeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
