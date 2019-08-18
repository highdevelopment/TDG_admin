import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditconfirmComponent } from './editconfirm.component';

describe('EditconfirmComponent', () => {
  let component: EditconfirmComponent;
  let fixture: ComponentFixture<EditconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
