import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from '../shared/auth.guard';

const routes: Routes = [
  {
    path: '', component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent, data: { title: 'Dashboard', sidebar: false, navbar: true } },
      { path: 'profile', component: ProfileComponent, data: { title: 'Profile Page', sidebar: true, navbar: true } },
    ], data: { title: 'Admin Page' }, canActivateChild: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
