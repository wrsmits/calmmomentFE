import {TestBed} from '@angular/core/testing';

import {MultipleChoiceQuestionService} from './multiplechoicequestion.service';

describe('MultChoiceQuestion', () => {
  let service: MultipleChoiceQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultipleChoiceQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
