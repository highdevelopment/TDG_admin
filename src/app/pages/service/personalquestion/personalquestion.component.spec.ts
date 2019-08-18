import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalquestionComponent } from './personalquestion.component';

describe('PersonalquestionComponent', () => {
  let component: PersonalquestionComponent;
  let fixture: ComponentFixture<PersonalquestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalquestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalquestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
