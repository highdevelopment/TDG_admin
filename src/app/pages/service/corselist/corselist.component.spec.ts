import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorselistComponent } from './corselist.component';

describe('CorselistComponent', () => {
  let component: CorselistComponent;
  let fixture: ComponentFixture<CorselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
