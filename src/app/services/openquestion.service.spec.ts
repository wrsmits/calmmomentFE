import {TestBed} from '@angular/core/testing';

import {OpenQuestionService} from './openquestion.service';

describe('OpenQuestion', () => {
  let service: OpenQuestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenQuestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
