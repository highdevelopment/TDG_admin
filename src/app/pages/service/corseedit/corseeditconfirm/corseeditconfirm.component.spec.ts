import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorseeditconfirmComponent } from './corseeditconfirm.component';

describe('CorseeditconfirmComponent', () => {
  let component: CorseeditconfirmComponent;
  let fixture: ComponentFixture<CorseeditconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorseeditconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorseeditconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
