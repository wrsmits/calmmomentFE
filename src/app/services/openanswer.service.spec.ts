import {TestBed} from '@angular/core/testing';

import {OpenAnswerService} from './openanswer.service';

describe('OpenAnswer', () => {
  let service: OpenAnswerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpenAnswerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
