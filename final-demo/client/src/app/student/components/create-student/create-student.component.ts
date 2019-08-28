import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from '../../services/student.service';

@Component({
  selector: 'app-create-student',
  templateUrl: './create-student.component.html',
  styleUrls: ['./create-student.component.scss']
})
export class CreateStudentComponent implements OnInit {

  constructor(private fb: FormBuilder, private studentService: StudentService, private route: Router, private activeRoute: ActivatedRoute) { }

  studentForm: FormGroup;
  submitted = false;
  student: Student;
  studentId: string;
  title = 'Create';

  ngOnInit() {
    this.studentForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      dob: ['', Validators.required],
      gender: ['male', Validators.required]
    });
    this.studentId = this.activeRoute.snapshot.params.studentId;
    if (this.studentId) {
      this.title = 'Update';
      this.loadData();
    }
  }

  loadData() {
    this.studentService.getStudent(this.studentId).subscribe((student) => {
      this.student = student;
      delete this.student.studentid;
      this.studentForm.setValue(this.student);
    });
  }

  get control() {
    return this.studentForm.controls;
  }

  onSubmit() {
    if (!((this.studentForm.dirty || this.studentId ) && this.studentForm.valid)) {
      return;
    } else {
      this.submitted = true;
      const data = this.studentForm.value;
      if (this.studentId) {
        this.studentService.updateStudent(this.studentId, data).subscribe(() => {
          window.alert('Data for student updated successfully');
          this.route.navigateByUrl('/list-student');
        });
      } else {
        this.studentService.createStudent(data).subscribe(() => {
          window.alert('Data for student created successfully');
          this.route.navigateByUrl('/list-student');
        });
      }
    }
  }
}
