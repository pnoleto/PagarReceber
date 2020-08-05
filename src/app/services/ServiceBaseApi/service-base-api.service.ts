import { Injectable } from '@angular/core';
import { IBaseApi } from '../../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ServiceBaseApiService implements IBaseApi {

  URL: string;
  Port: number;

  constructor() { }

  public Init(URL: string, Port: number) {
    if (!(URL.length > 0 || Port > 0))
      throw new Error('URL da api ou porta invalido.');

    this.URL = URL;
    this.Port = Port;
  }

}
