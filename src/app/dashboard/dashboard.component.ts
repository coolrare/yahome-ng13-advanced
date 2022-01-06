import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { chartAreaDemo } from '../chart-area-demo';
import { chartPieDemo } from '../chart-pie-demo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    chartAreaDemo();
    chartPieDemo();
  }

  goToTable() {
    this.router.navigate(['/tables'], {
      queryParams: { num: 100 }
    });
  }

}
