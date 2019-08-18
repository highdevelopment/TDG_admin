import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualdelconfirmComponent } from './manualdelconfirm.component';

describe('ManualdelconfirmComponent', () => {
  let component: ManualdelconfirmComponent;
  let fixture: ComponentFixture<ManualdelconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualdelconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualdelconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
