import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalquestiondetailComponent } from './personalquestiondetail.component';

describe('PersonalquestiondetailComponent', () => {
  let component: PersonalquestiondetailComponent;
  let fixture: ComponentFixture<PersonalquestiondetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalquestiondetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalquestiondetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
