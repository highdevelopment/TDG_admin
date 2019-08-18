import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernoticelistComponent } from './usernoticelist.component';

describe('UsernoticelistComponent', () => {
  let component: UsernoticelistComponent;
  let fixture: ComponentFixture<UsernoticelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernoticelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernoticelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
