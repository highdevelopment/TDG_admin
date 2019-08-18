import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernoticeregconfirmComponent } from './usernoticeregconfirm.component';

describe('UsernoticeregconfirmComponent', () => {
  let component: UsernoticeregconfirmComponent;
  let fixture: ComponentFixture<UsernoticeregconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernoticeregconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernoticeregconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
