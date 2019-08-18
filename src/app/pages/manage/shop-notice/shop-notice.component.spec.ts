import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopNoticeComponent } from './shop-notice.component';

describe('ShopNoticeComponent', () => {
  let component: ShopNoticeComponent;
  let fixture: ComponentFixture<ShopNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
