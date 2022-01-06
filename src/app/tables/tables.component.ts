import { TableService } from './table.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  list: any[] = [];

  display = false;

  list$ = this.route.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('num')),
    map((data) => data || '0'),
    map((data) => +data),
    switchMap((num) => this.tableService.getData(num)),
    shareReplay(1)
  );

  constructor(
    private route: ActivatedRoute,
    private tableService: TableService
  ) {}

  ngOnInit(): void {
    // [1, 2, 3].map(data => data + 1); // [2, 3, 4];
    // 示範 operator
    // this.route.queryParamMap
    //   .pipe(
    //     map((queryParamMap) => queryParamMap.get('num')),
    //     map((data) => data || '0'),
    //     map((data) => +data),
    //     switchMap((num) => this.tableService.getData(num))
    //   )
    //   .subscribe((data) => {
    //     console.log(data);
    //   });
    // 原始寫法
    // this.route.queryParamMap.subscribe((queryParamMap) => {
    //   console.log(queryParamMap.get('num'));
    //   // const data = queryParamMap.get('num');
    //   // const data2 = data || '0';
    //   // const num = +data2;
    //   const num = +(queryParamMap.get('num') || '0');
    //   this.httpClient
    //     .get<any[]>(
    //       'https://run.mocky.io/v3/53923ca1-98ac-4ce3-a47c-b0af3108de3e'
    //     )
    //     .subscribe((data) => {
    //       this.list = data.slice(0 , num);
    //       console.log(this.list);
    //     });
    // });
  }
}
