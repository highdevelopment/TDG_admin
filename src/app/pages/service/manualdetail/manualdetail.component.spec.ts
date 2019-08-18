import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualdetailComponent } from './manualdetail.component';

describe('ManualdetailComponent', () => {
  let component: ManualdetailComponent;
  let fixture: ComponentFixture<ManualdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
