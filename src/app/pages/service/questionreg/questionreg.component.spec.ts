import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionregComponent } from './questionreg.component';

describe('QuestionregComponent', () => {
  let component: QuestionregComponent;
  let fixture: ComponentFixture<QuestionregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
