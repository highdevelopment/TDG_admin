import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualregconfirmComponent } from './manualregconfirm.component';

describe('ManualregconfirmComponent', () => {
  let component: ManualregconfirmComponent;
  let fixture: ComponentFixture<ManualregconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualregconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualregconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
