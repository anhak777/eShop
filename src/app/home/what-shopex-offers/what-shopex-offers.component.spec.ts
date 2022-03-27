import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhatShopexOffersComponent } from './what-shopex-offers.component';

describe('WhatShopexOffersComponent', () => {
  let component: WhatShopexOffersComponent;
  let fixture: ComponentFixture<WhatShopexOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhatShopexOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhatShopexOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
