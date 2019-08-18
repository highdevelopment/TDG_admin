import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorseregconfirmComponent } from './corseregconfirm.component';

describe('CorseregconfirmComponent', () => {
  let component: CorseregconfirmComponent;
  let fixture: ComponentFixture<CorseregconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorseregconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorseregconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
