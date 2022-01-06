import { NotFoundComponent } from './not-found/not-found.component';
import { PageBComponent } from './page-b/page-b.component';
import { PageAComponent } from './page-a/page-a.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'page-a',
    component: PageAComponent
  },
  {
    path: 'page-b',
    component: PageBComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
  // {
  //   path: '**',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
