import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptionHeaderComponent } from './caption-header.component';

describe('CaptionHeaderComponent', () => {
  let component: CaptionHeaderComponent;
  let fixture: ComponentFixture<CaptionHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptionHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptionHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
