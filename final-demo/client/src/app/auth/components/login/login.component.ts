import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // tslint:disable-next-line: max-line-length
  constructor(private fb: FormBuilder, private route: Router, private authenticationService: AuthenticationService, private router: Router) {
  }

  loginForm: FormGroup;
  submitted = false;

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get control() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (!(this.loginForm.dirty && this.loginForm.valid)) {
      return;
    } else {
      this.authenticationService
        .validateUser(this.loginForm.get('email').value, this.loginForm.get('password').value)
        .subscribe(
          (data) => {
            if (data.status === 'OK') {
              localStorage.setItem('user', JSON.stringify(data.user));
              this.router.navigate(['/dashboard']);
            } else {
              window.alert('Invalid username or password');
              this.submitted = false;
            }
          },
          (error) => {
            window.alert('error while signup');
            this.submitted = false;
          }
        );
    }
  }


}
