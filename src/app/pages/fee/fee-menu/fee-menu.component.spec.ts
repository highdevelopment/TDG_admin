import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeMenuComponent } from './fee-menu.component';

describe('FeeMenuComponent', () => {
  let component: FeeMenuComponent;
  let fixture: ComponentFixture<FeeMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeeMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
