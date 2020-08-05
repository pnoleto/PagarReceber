import { Base } from '../base/base';

export class Movimentacao extends Base {
    Descricao: string;
    CodAgrupamento: number;
    CodigoCarteira: number;
    DataMovimentacao: Date;
    Valor: number;
    Pago: boolean;
}
