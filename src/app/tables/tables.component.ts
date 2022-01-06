import { TableService } from './table.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { interval, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit, OnDestroy {
  list: any[] = [];

  display = false;

  list$ = this.route.queryParamMap.pipe(
    map((queryParamMap) => queryParamMap.get('num')),
    map((data) => data || '0'),
    map((data) => +data),
    switchMap((num) => this.tableService.getData(num)),
    shareReplay(1)
  );

  timer$ = interval(1000).pipe(
    tap(data => console.log(data))
  );

    subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private tableService: TableService
  ) {}

  ngOnInit(): void {
    const sub =  interval(1000).subscribe(data => {
      console.log(data);
    });

    this.subscription.add(sub);

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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
