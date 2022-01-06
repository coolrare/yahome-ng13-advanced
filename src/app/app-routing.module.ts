import { PageBComponent } from './page-b/page-b.component';
import { PageAComponent } from './page-a/page-a.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'page-a',
    component: PageAComponent
  },
  {
    path: 'page-b',
    component: PageBComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
