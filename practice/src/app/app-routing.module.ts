import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './user/components/home/home.component';
import { InfoComponent } from './shared/components/info/info.component';
import { AuthGuard } from './shared/auth.guard';
import { StudyResolver } from './shared/study-resolve.service';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: { title: 'Home Page', sidebar: true, navbar: true },
    canActivate: [AuthGuard],
    resolve: {
      page: StudyResolver
    }
  },
  { path: 'info', component: InfoComponent, data: { title: 'Info page', sidebar: false, navbar: true }, canActivate: [AuthGuard] },
  { path: 'admin', loadChildren: './admin/admin.module#AdminModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, /*{ enableTracing: true }*/)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
