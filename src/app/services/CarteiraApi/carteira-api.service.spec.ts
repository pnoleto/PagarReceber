import { TestBed } from '@angular/core/testing';

import { CarteiraApiService } from './carteira-api.service';

describe('CarteiraApiService', () => {
  let service: CarteiraApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarteiraApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
