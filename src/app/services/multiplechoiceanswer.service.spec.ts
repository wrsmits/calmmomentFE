import {TestBed} from '@angular/core/testing';

import {MultipleChoiceAnswerService} from './multiplechoiceanswer.service';

describe('MultChoiceAnswer', () => {
  let service: MultipleChoiceAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleChoiceAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
