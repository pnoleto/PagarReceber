import { TestBed } from '@angular/core/testing';

import { MovimentosApiService } from './movimentos-api.service';

describe('MovimentosApiService', () => {
  let service: MovimentosApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovimentosApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
