import { Observable } from 'rxjs';
import { BaseDTO, EntityBase, BasePagination } from '../classes';

export interface ICrudApi {
    List<TTEntity, TEntityFilter>(params: BasePagination<TEntityFilter>): Observable<BaseDTO<TTEntity>>
    Insert<TTEntity>(Entidade: EntityBase): Observable<BaseDTO<TTEntity>>;
    Update<TTEntity>(Entidade: EntityBase): Observable<BaseDTO<TTEntity>>;
    Delete<TTEntity>(Entidade: EntityBase): Observable<BaseDTO<TTEntity>>;
}
