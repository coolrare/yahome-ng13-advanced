import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { ColorComponent } from './utilities/color/color.component';
import { OtherComponent } from './utilities/other/other.component';
import { BorderComponent } from './utilities/border/border.component';
import { AnimationComponent } from './utilities/animation/animation.component';
import { TablesComponent } from './tables/tables.component';
import { ChartsComponent } from './charts/charts.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageBComponent } from './page-b/page-b.component';
import { PageAComponent } from './page-a/page-a.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: '',
    canActivate: [AuthGuard],
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'user-profile',
        component: UserProfileComponent,
      },
      {
        path: 'page-a',
        component: PageAComponent,
      },
      {
        path: 'page-b',
        component: PageBComponent,
      },
      {
        path: 'charts',
        // component: ChartsComponent,
        loadChildren: () =>
          import('./charts/charts.module').then((m) => m.ChartsModule),
      },
      {
        path: 'tables',
        component: TablesComponent,
      },
      {
        path: 'utilities',
        children: [
          {
            path: '',
            // component: OtherComponent
            redirectTo: 'other',
            pathMatch: 'full',
          },
          {
            path: 'animation', // utilities/animation
            component: AnimationComponent,
          },
          {
            path: 'border', // utilities/border
            component: BorderComponent,
          },
          {
            path: 'other',
            component: OtherComponent,
          },
          {
            path: 'color',
            component: ColorComponent,
          },
          {
            path: 'color/:type',
            component: ColorComponent,
          },
        ],
      },
      {
        path: 'pages',
        loadChildren: () =>
          import('./pages/pages.module').then((m) => m.PagesModule),
        // import { PagesModule } from './pages/pages.module'
      },
    ],
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      //  enableTracing: true
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
