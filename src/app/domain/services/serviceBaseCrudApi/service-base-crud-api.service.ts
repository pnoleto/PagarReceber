import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ICrudApi, IBaseApi } from '../../interfaces';
import { HttpClient } from '@angular/common/http';
import { BaseDTO, EntityBase, BasePagination } from '../../classes';
import { retry, timeout, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ParamsHelper } from '../../Helpers';

@Injectable({
    providedIn: 'root'
})
export class ServiceBaseCrudApiService implements ICrudApi, IBaseApi {

    private timeout: number = 5000;
    private retry: number = 3;
    private URL: string;

    constructor(
        private httpClient: HttpClient
    ) { }

    public Init(URL: string) {
        if (!(URL.length > 0))
            throw new Error('URL ou porta invalido.');

        this.URL = URL;
        this.timeout = environment.RequestOptions.TimeOut ? environment.RequestOptions.TimeOut : this.timeout;
        this.retry = environment.RequestOptions.Retry ? environment.RequestOptions.Retry : this.retry;
    }

    public List<TTEntity, TEntityFilter>(Entidade: BasePagination<TEntityFilter>): Observable<BaseDTO<TTEntity>> {
        let params: URLSearchParams = ParamsHelper.ObtemParametros(Entidade)

        return this.httpClient.get<BaseDTO<TTEntity>>(`${this.URL}?${params}`)
            .pipe(
                retry(this.retry),
                timeout(this.timeout),
                catchError((error) => { throw error })
            );
    }

    public Insert<TTEntity>(Entidade: EntityBase): Observable<BaseDTO<TTEntity>> {
        return this.httpClient.post<BaseDTO<TTEntity>>(`${this.URL}?Codigo=${Entidade.Codigo}`, Entidade)
            .pipe(
                retry(this.retry),
                timeout(this.timeout),
                catchError((error) => { throw new error })
            );
    }

    public Update<TTEntity>(Entidade: EntityBase): Observable<BaseDTO<TTEntity>> {
        return this.httpClient.put<BaseDTO<TTEntity>>(`${this.URL}?Codigo=${Entidade.Codigo}`, Entidade)
            .pipe(
                retry(this.retry),
                timeout(this.timeout),
                catchError((error) => { throw error })
            );
    }

    public Delete<TTEntity>(Entidade: EntityBase): Observable<BaseDTO<TTEntity>> {
        return this.httpClient.delete<BaseDTO<TTEntity>>(`${this.URL}?Codigo=${Entidade.Codigo}`)
            .pipe(
                retry(this.retry),
                timeout(this.timeout),
                catchError((error) => { throw error })
            );
    }

}
