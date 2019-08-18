import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernoticeeditComponent } from './usernoticeedit.component';

describe('UsernoticeeditComponent', () => {
  let component: UsernoticeeditComponent;
  let fixture: ComponentFixture<UsernoticeeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernoticeeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernoticeeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
