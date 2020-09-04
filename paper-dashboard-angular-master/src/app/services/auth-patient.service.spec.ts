import { TestBed } from '@angular/core/testing';

import { AuthPatientService } from './auth-patient.service';

describe('AuthPatientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthPatientService = TestBed.get(AuthPatientService);
    expect(service).toBeTruthy();
  });
});
