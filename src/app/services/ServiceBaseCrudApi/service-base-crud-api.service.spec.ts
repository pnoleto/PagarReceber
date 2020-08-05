import { TestBed } from '@angular/core/testing';

import { ServiceBaseCrudApiService } from './ServiceBaseCrudApiService';

describe('ServiceBaseCrudApiService', () => {
  let service: ServiceBaseCrudApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceBaseCrudApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
