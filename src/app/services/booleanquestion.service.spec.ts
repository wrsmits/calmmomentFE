import {TestBed} from '@angular/core/testing';

import {BooleanQuestionService} from './booleanquestion.service';

describe('BooleanQuestionService', () => {
  let service: BooleanQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooleanQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
