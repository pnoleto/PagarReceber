import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICrudApi } from '../../interfaces';
import { retry, timeout, catchError } from 'rxjs/operators';
import { ServiceBaseApiService } from '../ServiceBaseApi/service-base-api.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ServiceBaseCrudApiService extends ServiceBaseApiService implements ICrudApi {

    timeout: number = 5000;
    retry: number = 3;

    constructor(private httpClient: HttpClient) {
        super();
    }

    public List<TTEntity, TTEntityFilter>(Entidade: TTEntityFilter): Observable<TTEntity> {
        return this.httpClient.get<TTEntity>(this.URL)
            .pipe(
                retry(this.retry),
                catchError((error) => { throw error }),
                timeout(this.timeout)
            );
    }

    public Insert<TTEntity>(Entidade: TTEntity): Observable<TTEntity> {
        return this.httpClient.post<TTEntity>(this.URL, Entidade)
            .pipe(
                retry(this.retry),
                timeout(this.timeout),
                catchError((error) => { throw error })
            );
    }

    public Update<TTEntity>(Entidade: TTEntity): Observable<TTEntity> {
        return this.httpClient.put<TTEntity>(this.URL, Entidade)
            .pipe(
                retry(this.retry),
                timeout(this.timeout),
                catchError((error) => { throw error })
            );
    }

    public Delete<TTEntity>(Entidade: TTEntity): Observable<TTEntity> {
        return this.httpClient.delete<TTEntity>(this.URL, Entidade)
            .pipe(
                retry(this.retry),
                timeout(this.timeout),
                catchError((error) => { throw error })
            );
    }

}
