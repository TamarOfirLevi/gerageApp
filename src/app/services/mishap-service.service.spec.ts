import { TestBed } from '@angular/core/testing';

import { MishapServiceService } from './mishap-service.service';

describe('MishapServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MishapServiceService = TestBed.get(MishapServiceService);
    expect(service).toBeTruthy();
  });
});
