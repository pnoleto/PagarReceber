import { EntityBase } from '../base/base';

export class Movimento extends EntityBase {
    Descricao: string;
    CodAgrupamento: number;
    CodigoCarteira: number;
    DataMovimentacao: Date;
    Valor: number;
    Pago: boolean;
}
