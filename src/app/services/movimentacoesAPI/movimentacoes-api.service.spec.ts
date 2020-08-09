import { TestBed } from '@angular/core/testing';

import { MovimentacoesAPIService } from './movimentacoes-api.service';

describe('MovimentacoesAPIService', () => {
  let service: MovimentacoesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimentacoesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
