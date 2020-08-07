import { Movimento, BaseDTO, BasePagination } from '../classes';

export interface ImovimentosApi {
    ListMovimento(Entidade: BasePagination<Movimento>): Promise<BaseDTO<Movimento>>;
    InsertMovimento(Entidade: Movimento): Promise<BaseDTO<Movimento>>;
    UpdateMovimento(Entidade: Movimento): Promise<BaseDTO<Movimento>>;
    DeleteMovimento(Entidade: Movimento): Promise<BaseDTO<Movimento>>;
}
