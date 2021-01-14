import {TestBed} from '@angular/core/testing';

import {SituationService} from './situation.service';

describe('Score', () => {
  let service: SituationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SituationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
