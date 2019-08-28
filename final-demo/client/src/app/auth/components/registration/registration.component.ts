import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthenticationService, private route: Router) { }

  registrationForm: FormGroup;
  submitted = false;
  data = null;

  ngOnInit() {
    this.registrationForm = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      lastname: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required]],
      contact: ['', [Validators.required, Validators.pattern('^[6789]{1}[0-9]{9}$')]]
      // tslint:disable-next-line: no-use-before-declare
    }, { validator: PasswordValidator });
  }

  get control() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    if (!(this.registrationForm.dirty && this.registrationForm.valid)) {
      return;
    } else {
      this.submitted = true;
      let data = this.registrationForm.value;
      data.role = 'admin';
      this.authService.createUser(data).subscribe(() => {
        window.alert('User created');
        this.route.navigateByUrl('/');
      });
    }
  }

}

const PasswordValidator: ValidatorFn = (fg: FormGroup) => {
  const password = fg.get('password');
  const regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,25}$/;
  if (password.value.length < 8) {
    password.setErrors({ notValid: 'Password must be atleast 8 character long.' });
  } else if (!regexp.test(password.value)) {
    password.setErrors({ notValid: 'Password is to weak.' });
  }
  // const confpassword = fg.get('confpassword');
  // if (password.value !== null && confpassword.value !== null && password.value !== confpassword.value) {
  //   confpassword.setErrors({ notEqual: true });
  // }
  return null;
};
