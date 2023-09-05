import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, map } from 'rxjs';

import { Trimester, Session } from '../models/trimester.model';

@Injectable()
export class HomeService {
  toggleConfig$: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private readonly _http: HttpClient) {}

  getTrimesters(): Observable<Array<Trimester>> {
    return this._http.get<Array<Trimester>>('/assets/mocks/trimesters.json');
  }

  getDataByTrimester(trimesterId: string): Observable<Array<Session>> {
    return this._http
      .get<Record<string, Array<Session>>>('/assets/mocks/data.json')
      .pipe(map((data: Record<string, Array<Session>>) => data[trimesterId]));
  }
}
