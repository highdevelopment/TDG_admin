import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualupdateComponent } from './manualupdate.component';

describe('ManualupdateComponent', () => {
  let component: ManualupdateComponent;
  let fixture: ComponentFixture<ManualupdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualupdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
