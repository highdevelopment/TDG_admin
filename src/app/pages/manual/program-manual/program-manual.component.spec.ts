import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramManualComponent } from './program-manual.component';

describe('ProgramManualComponent', () => {
  let component: ProgramManualComponent;
  let fixture: ComponentFixture<ProgramManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgramManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
