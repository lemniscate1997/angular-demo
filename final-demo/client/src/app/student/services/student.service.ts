import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  url = `${environment.backendEndpoint}/student`;

  constructor(private http: HttpClient) { }

  getAllStudent(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.url}/getAll`, { withCredentials: true });
  }

  createStudent(student): Observable<any> {
    return this.http.post<any>(`${this.url}/create`, student, { withCredentials: true });
  }

  updateStudent(studentId, student): Observable<any> {
    return this.http.put<any>(`${this.url}/update/${studentId}`, student, { withCredentials: true });
  }

  getStudent(studentId): Observable<Student> {
    return this.http.get<Student>(`${this.url}/get/${studentId}`, { withCredentials: true });
  }

  removeStudent(studentId): Observable<any> {
    return this.http.delete<any>(`${this.url}/remove/${studentId}`, { withCredentials: true });
  }
}
