import { BasePagination, Agrupamento, BaseDTO } from '..';

export interface IAgrupamentoApi {

    ListAgrupamento(Entidade: BasePagination<Agrupamento>): Promise<BaseDTO<Agrupamento>>;
    InsertAgrupamento(Entidade: Agrupamento): Promise<BaseDTO<Agrupamento>>;
    UpdateAgrupamento(Entidade: Agrupamento): Promise<BaseDTO<Agrupamento>>;
    DeleteAgrupamento(Entidade: Agrupamento): Promise<BaseDTO<Agrupamento>>;
}
