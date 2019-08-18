import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerqaComponent } from './managerqa.component';

describe('ManagerqaComponent', () => {
  let component: ManagerqaComponent;
  let fixture: ComponentFixture<ManagerqaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerqaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerqaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
