import { TestBed } from '@angular/core/testing';

import { NUMPXXXService } from './numpxxx.service';

describe('NUMPXXXService', () => {
  let service: NUMPXXXService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NUMPXXXService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
