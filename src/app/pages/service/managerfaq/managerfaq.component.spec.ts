import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerfaqComponent } from './managerfaq.component';

describe('ManagerfaqComponent', () => {
  let component: ManagerfaqComponent;
  let fixture: ComponentFixture<ManagerfaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerfaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
