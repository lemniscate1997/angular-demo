import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from './services/student.service';
import { ListStudentComponent } from './components/list-student/list-student.component';
import { CreateStudentComponent } from './components/create-student/create-student.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListStudentComponent, CreateStudentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [StudentService]
})
export class StudentModule { }
