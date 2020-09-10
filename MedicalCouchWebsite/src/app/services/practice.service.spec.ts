/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PracticeService } from './practice.service';

describe('Service: Practice', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PracticeService]
    });
  });

  it('should ...', inject([PracticeService], (service: PracticeService) => {
    expect(service).toBeTruthy();
  }));
});
