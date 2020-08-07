import { BasePagination, Carteira, BaseDTO } from '..';

export interface ICarteiraApi {
    ListCarteira(Entidade: BasePagination<Carteira>): Promise<BaseDTO<Carteira>>;
    InsertCarteira(Entidade: Carteira): Promise<BaseDTO<Carteira>>;
    UpdateCarteira(Entidade: Carteira): Promise<BaseDTO<Carteira>>;
    DeleteCarteira(Entidade: Carteira): Promise<BaseDTO<Carteira>>;
}
