import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestiondelComponent } from './questiondel.component';

describe('QuestiondelComponent', () => {
  let component: QuestiondelComponent;
  let fixture: ComponentFixture<QuestiondelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestiondelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestiondelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
