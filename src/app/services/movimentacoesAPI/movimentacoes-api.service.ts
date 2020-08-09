import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import {
  IMovimentacoesApi, BaseDTO,
  movimentacoesPeriodo, ServiceBaseCrudApiService,
  BasePagination, MovimentacoesDoPeriodoFiltro
} from '../../domain';

@Injectable({
  providedIn: 'root'
})
export class MovimentacoesAPIService implements IMovimentacoesApi {

  constructor(
    private serviceBase: ServiceBaseCrudApiService
  ) {
    this.serviceBase.Init(environment.EndPoints.Movimentacoes);
  }

  public ObtemMovimentacoesDoPeriodo(Entidade: BasePagination<MovimentacoesDoPeriodoFiltro>): Observable<BaseDTO<movimentacoesPeriodo>> {
    return this.serviceBase.List<movimentacoesPeriodo, MovimentacoesDoPeriodoFiltro>(Entidade);
  }

}
