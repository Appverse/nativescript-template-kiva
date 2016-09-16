import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import * as Rx from 'rxjs';

export interface KivaMethod {
  id: string;
  http_method: string;
  uri: string;
  documentation: {
    en: {
      summary: string;
    }
  };
  argument_count: string;
  status: string;
  oauth?: boolean;
}

@Injectable()
export class KivaService {

  constructor(private http: Http) { }

  getMethods(): Rx.Observable<KivaMethod[]> {
    return this.http
      .get('https://api.kivaws.org/v1/methods.json')
      .map(response => response.json().methods as KivaMethod[]);
  }

  getMethod(method: KivaMethod) {
    return this.http
      .get(`https://api.kivaws.org/v1/methods/${encodeURIComponent(method.id)}.json`)
      .map(response => response.json().methods[0] as KivaMethod);
  }
}
