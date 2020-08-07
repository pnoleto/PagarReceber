import { Injectable } from '@angular/core';
import { IAgrupamentoApi } from '../../domain/interfaces';
import { environment } from '../../../environments/environment';
import { BasePagination, ServiceBaseCrudApiService, Agrupamento, BaseDTO } from '../../domain';

@Injectable({
    providedIn: 'root',
    deps:[ServiceBaseCrudApiService]
})
export class AgrupamentoApiService implements IAgrupamentoApi {

    constructor(
        private serviceBase: ServiceBaseCrudApiService
      ) {
        this.serviceBase.Init(environment.EndPoints.Agrupamentos);
      }
    
      public ListAgrupamento(Entidade: BasePagination<Agrupamento>): Promise<BaseDTO<Agrupamento>> {
        return this.serviceBase.List<Agrupamento, Agrupamento>(Entidade).toPromise();
      }
    
      public InsertAgrupamento(Entidade: Agrupamento): Promise<BaseDTO<Agrupamento>> {
        return this.serviceBase.Insert<Agrupamento>(Entidade).toPromise();
      }
    
      public UpdateAgrupamento(Entidade: Agrupamento): Promise<BaseDTO<Agrupamento>> {
        return this.serviceBase.Update<Agrupamento>(Entidade).toPromise();
      }
    
      public DeleteAgrupamento(Entidade: Agrupamento): Promise<BaseDTO<Agrupamento>> {
        return this.serviceBase.Delete<Agrupamento>(Entidade).toPromise();
      }
}
