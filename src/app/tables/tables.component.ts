import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
})
export class TablesComponent implements OnInit {
  list: any[] = [];

  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queryParamMap) => {
      console.log(queryParamMap.get('num'));
      const num = +(queryParamMap.get('num') || '0');

      this.httpClient
        .get<any[]>(
          'https://run.mocky.io/v3/53923ca1-98ac-4ce3-a47c-b0af3108de3e'
        )
        .subscribe((data) => {
          this.list = data.slice(0 , num);
          console.log(this.list);
        });
    });
  }
}
