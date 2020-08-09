import { Observable } from "rxjs";
import {
    BaseDTO, movimentacoesPeriodo,
    MovimentacoesDoPeriodoFiltro, BasePagination
} from "../classes";

export interface IMovimentacoesApi {
    ObtemMovimentacoesDoPeriodo(Entidade: BasePagination<MovimentacoesDoPeriodoFiltro>): Observable<BaseDTO<movimentacoesPeriodo>>;
}
