import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysGameComponent } from './days-game.component';

describe('DaysGameComponent', () => {
  let component: DaysGameComponent;
  let fixture: ComponentFixture<DaysGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
