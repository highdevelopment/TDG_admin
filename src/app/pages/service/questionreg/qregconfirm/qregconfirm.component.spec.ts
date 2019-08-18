import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QregconfirmComponent } from './qregconfirm.component';

describe('QregconfirmComponent', () => {
  let component: QregconfirmComponent;
  let fixture: ComponentFixture<QregconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QregconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QregconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
