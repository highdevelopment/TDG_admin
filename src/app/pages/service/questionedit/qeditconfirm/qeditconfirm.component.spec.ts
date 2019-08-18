import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QeditconfirmComponent } from './qeditconfirm.component';

describe('QeditconfirmComponent', () => {
  let component: QeditconfirmComponent;
  let fixture: ComponentFixture<QeditconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QeditconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QeditconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
