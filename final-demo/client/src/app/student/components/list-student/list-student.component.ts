import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {

  students: Student[];
  constructor(private studentService: StudentService, private route: Router) { }

  ngOnInit() {
    this.studentService.getAllStudent().subscribe((students) => {
      this.students = students;
    });
  }

  create() {
    this.route.navigate(['create-student']);
  }

  update(i) {
    this.route.navigate(['update-student', this.students[i].studentid]);
  }

  delete(i) {
    console.log(i);
    if (confirm('Are you sure to delete student?')) {
      this.studentService.removeStudent(this.students[i].studentid).subscribe(() => {
        this.students.splice(i, 1);
        window.alert('Student removed successfully');
      });
    }
  }

}
