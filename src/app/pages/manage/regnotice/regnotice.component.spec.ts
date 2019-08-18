import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegnoticeComponent } from './regnotice.component';

describe('RegnoticeComponent', () => {
  let component: RegnoticeComponent;
  let fixture: ComponentFixture<RegnoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegnoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegnoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
