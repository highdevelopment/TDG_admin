import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysManualComponent } from './sys-manual.component';

describe('SysManualComponent', () => {
  let component: SysManualComponent;
  let fixture: ComponentFixture<SysManualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysManualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysManualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
