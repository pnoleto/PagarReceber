import { TestBed } from '@angular/core/testing';

import { MovimentacaoApiService } from './movimentacao-api.service';

describe('MovimentacaoApiService', () => {
  let service: MovimentacaoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimentacaoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
