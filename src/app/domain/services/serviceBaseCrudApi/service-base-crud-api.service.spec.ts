import { TestBed } from '@angular/core/testing';

import { ServiceBaseCrudApiService } from './service-base-crud-api.service';

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
