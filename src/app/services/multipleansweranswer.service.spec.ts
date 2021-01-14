import {TestBed} from '@angular/core/testing';

import {MultAnsAnswerService} from './multipleansweranswer.service';

describe('MultAnsAnswerService', () => {
  let service: MultAnsAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultAnsAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
