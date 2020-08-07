import { Injectable } from '@angular/core';
import { ICarteiraApi } from '../../domain/interfaces';
import { BasePagination, Carteira, BaseDTO, ServiceBaseCrudApiService } from '../../domain';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarteiraApiService implements ICarteiraApi {

  constructor(
    private serviceBase: ServiceBaseCrudApiService
  ) {
    this.serviceBase.Init(environment.EndPoints.Carteiras);
  }

  public ListCarteira(Entidade: BasePagination<Carteira>): Promise<BaseDTO<Carteira>> {
    return this.serviceBase.List<Carteira, Carteira>(Entidade).toPromise();
  }

  public InsertCarteira(Entidade: Carteira): Promise<BaseDTO<Carteira>> {
    return this.serviceBase.Insert<Carteira>(Entidade).toPromise();
  }

  public UpdateCarteira(Entidade: Carteira): Promise<BaseDTO<Carteira>> {
    return this.serviceBase.Update<Carteira>(Entidade).toPromise();
  }

  public DeleteCarteira(Entidade: Carteira): Promise<BaseDTO<Carteira>> {
    return this.serviceBase.Delete<Carteira>(Entidade).toPromise();
  }

}
