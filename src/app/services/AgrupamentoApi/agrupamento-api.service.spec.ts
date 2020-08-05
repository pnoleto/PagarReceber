import { TestBed } from '@angular/core/testing';

import { AgrupamentoApiService } from './agrupamento-api.service';

describe('AgrupamentoApiService', () => {
  let service: AgrupamentoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgrupamentoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
