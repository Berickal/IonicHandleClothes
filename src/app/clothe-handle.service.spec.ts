import { TestBed } from '@angular/core/testing';

import { ClotheHandleService } from './clothe-handle.service';

describe('ClotheHandleService', () => {
  let service: ClotheHandleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClotheHandleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
