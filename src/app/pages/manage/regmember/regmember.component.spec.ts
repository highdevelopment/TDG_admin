import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegmemberComponent } from './regmember.component';

describe('RegmemberComponent', () => {
  let component: RegmemberComponent;
  let fixture: ComponentFixture<RegmemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegmemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegmemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
