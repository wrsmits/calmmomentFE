import {TestBed} from '@angular/core/testing';

import {TipService} from './tip.service';

describe('Tip', () => {
  let service: TipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
