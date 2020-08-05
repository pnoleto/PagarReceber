import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceBaseApiService } from '../../domain/services';
import { ICrudApi, IBaseApi } from '../../domain/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MovimentacaoApiService extends ServiceBaseApiService implements ICrudApi, IBaseApi {

  constructor() {
    super();
  }

  public List<TTEntity, TTEntityFilter>(Entidade: TTEntityFilter): Observable<TTEntity> {
    throw new Error("Method not implemented.");
  }
  
  public Insert<TTEntity>(Entidade: TTEntity): Observable<TTEntity> {
    throw new Error("Method not implemented.");
  }

  public Update<TTEntity>(Entidade: TTEntity): Observable<TTEntity> {
    throw new Error("Method not implemented.");
  }

  public Delete<TTEntity>(Entidade: TTEntity): Observable<TTEntity> {
    throw new Error("Method not implemented.");
  }
}
