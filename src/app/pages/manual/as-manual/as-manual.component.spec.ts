import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsManualComponent } from './as-manual.component';

describe('AsManualComponent', () => {
  let component: AsManualComponent;
  let fixture: ComponentFixture<AsManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
