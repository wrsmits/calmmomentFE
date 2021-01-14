import {TestBed} from '@angular/core/testing';

import {BooleanAnswerService} from './booleananswer.service';

describe('BooleananswerService', () => {
  let service: BooleanAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooleanAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
