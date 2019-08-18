import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorseregComponent } from './corsereg.component';

describe('CorseregComponent', () => {
  let component: CorseregComponent;
  let fixture: ComponentFixture<CorseregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorseregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorseregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
