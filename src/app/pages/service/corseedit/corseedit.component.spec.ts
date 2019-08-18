import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorseeditComponent } from './corseedit.component';

describe('CorseeditComponent', () => {
  let component: CorseeditComponent;
  let fixture: ComponentFixture<CorseeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorseeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorseeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
