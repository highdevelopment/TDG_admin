import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernoticeeditconfirmComponent } from './usernoticeeditconfirm.component';

describe('UsernoticeeditconfirmComponent', () => {
  let component: UsernoticeeditconfirmComponent;
  let fixture: ComponentFixture<UsernoticeeditconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernoticeeditconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernoticeeditconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
