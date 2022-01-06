import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TableService {
  constructor(private httpClient: HttpClient) {}

  getData(num: number) {
    return this.httpClient
      .get<any[]>(
        'https://run.mocky.io/v3/53923ca1-98ac-4ce3-a47c-b0af3108de3e'
      )
      .pipe(map((list) => list.slice(0, num)));
  }
}
