import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualregComponent } from './manualreg.component';

describe('ManualregComponent', () => {
  let component: ManualregComponent;
  let fixture: ComponentFixture<ManualregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManualregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
