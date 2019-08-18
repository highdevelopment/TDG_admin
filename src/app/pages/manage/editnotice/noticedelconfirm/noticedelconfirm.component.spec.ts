import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticedelconfirmComponent } from './noticedelconfirm.component';

describe('NoticedelconfirmComponent', () => {
  let component: NoticedelconfirmComponent;
  let fixture: ComponentFixture<NoticedelconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticedelconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticedelconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
