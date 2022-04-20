import { TestBed } from '@angular/core/testing';

import { TopFilterService } from './top-filter.service';

describe('TopFilterService', () => {
  let service: TopFilterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopFilterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
