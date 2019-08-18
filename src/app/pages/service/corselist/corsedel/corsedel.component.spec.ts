import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorsedelComponent } from './corsedel.component';

describe('CorsedelComponent', () => {
  let component: CorsedelComponent;
  let fixture: ComponentFixture<CorsedelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorsedelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorsedelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
