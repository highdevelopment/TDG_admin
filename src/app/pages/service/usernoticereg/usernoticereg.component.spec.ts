import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernoticeregComponent } from './usernoticereg.component';

describe('UsernoticeregComponent', () => {
  let component: UsernoticeregComponent;
  let fixture: ComponentFixture<UsernoticeregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernoticeregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernoticeregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
