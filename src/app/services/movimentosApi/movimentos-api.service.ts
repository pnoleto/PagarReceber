
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { BasePagination, Movimento, BaseDTO } from '../../classes';
import { ImovimentosApi, ServiceBaseCrudApiService } from '../../domain';

@Injectable({
  providedIn: 'root'
})
export class MovimentosApiService implements ImovimentosApi {

  constructor(
    private serviceBase: ServiceBaseCrudApiService
  ) {
    this.serviceBase.Init(environment.EndPoints.Movimentos);
  }

  public ListMovimento(Entidade: BasePagination<Movimento>): Promise<BaseDTO<Movimento>> {
    return this.serviceBase.List<Movimento, Movimento>(Entidade).toPromise();
  }

  public InsertMovimento(Entidade: Movimento): Promise<BaseDTO<Movimento>> {
    return this.serviceBase.Insert<Movimento>(Entidade).toPromise();
  }

  public UpdateMovimento(Entidade: Movimento): Promise<BaseDTO<Movimento>> {
    return this.serviceBase.Update<Movimento>(Entidade).toPromise();
  }

  public DeleteMovimento(Entidade: Movimento): Promise<BaseDTO<Movimento>> {
    return this.serviceBase.Delete<Movimento>(Entidade).toPromise();
  }

}
