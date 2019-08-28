import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { RegistrationComponent } from './auth/components/registration/registration.component';
import { DashboardComponent } from './user/components/dashboard/dashboard.component';
import { AuthGuard } from './auth/services/auth.guard';
import { ListStudentComponent } from './student/components/list-student/list-student.component';
import { CreateStudentComponent } from './student/components/create-student/create-student.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'register', component: RegistrationComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'list-student', component: ListStudentComponent, canActivate: [AuthGuard] },
  { path: 'create-student', component: CreateStudentComponent, canActivate: [AuthGuard] },
  { path: 'update-student/:studentId', component: CreateStudentComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
