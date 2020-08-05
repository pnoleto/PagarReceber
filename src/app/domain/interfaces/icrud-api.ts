import { Observable } from 'rxjs';

export interface ICrudApi {
    List<TTEntity, TTEntityFilter>(Entidade: TTEntityFilter): Observable<TTEntity>;
    Insert<TTEntity>(Entidade: TTEntity): Observable<TTEntity>;
    Update<TTEntity>(Entidade: TTEntity): Observable<TTEntity>;
    Delete<TTEntity>(Entidade: TTEntity): Observable<TTEntity>;
}
