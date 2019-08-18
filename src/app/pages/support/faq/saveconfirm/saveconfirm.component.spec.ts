import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveconfirmComponent } from './saveconfirm.component';

describe('SaveconfirmComponent', () => {
  let component: SaveconfirmComponent;
  let fixture: ComponentFixture<SaveconfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveconfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveconfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
