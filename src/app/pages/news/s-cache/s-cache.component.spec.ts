import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SCacheComponent } from './s-cache.component';

describe('SCacheComponent', () => {
  let component: SCacheComponent;
  let fixture: ComponentFixture<SCacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SCacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SCacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
