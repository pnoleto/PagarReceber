import { TestBed } from '@angular/core/testing';

import { ServiceBaseApiService } from './service-base-api.service';

describe('ServiceBaseApiService', () => {
  let service: ServiceBaseApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBaseApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
