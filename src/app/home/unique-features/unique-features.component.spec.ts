import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueFeaturesComponent } from './unique-features.component';

describe('UniqueFeaturesComponent', () => {
  let component: UniqueFeaturesComponent;
  let fixture: ComponentFixture<UniqueFeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueFeaturesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqueFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
