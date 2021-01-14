import {TestBed} from '@angular/core/testing';

import {MultAnsQuestionService} from './multipleanswerquestion.service';

describe('MultAnsQuestionService', () => {
  let service: MultAnsQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultAnsQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
