import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualupdateconfirmComponent } from './manualupdateconfirm.component';

describe('ManualupdateconfirmComponent', () => {
  let component: ManualupdateconfirmComponent;
  let fixture: ComponentFixture<ManualupdateconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualupdateconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualupdateconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
