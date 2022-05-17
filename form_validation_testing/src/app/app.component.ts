import { Component, OnInit } from '@angular/core';
import { AbstractControl, Form, FormControl, FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  wordError = false;

  hide = true;

  get name() {
    return this.registrationForm.get('userName');
  }
  get email() {
    return this.registrationForm.get('email');
  }
  get password() {
    return this.registrationForm.get('password');
  }

  get confirmPassword() {
    return this.registrationForm.get('confirmPassword');
  }
  get gender() {
    return this.registrationForm.get('gender');
  }
  get team() {
    return this.registrationForm.get('team');
  }

  get dob() {
    return this.registrationForm.get('dob');
  }

  get hobby() {
    return this.registrationForm.get('hobby');
  }

  get description() {
    return this.registrationForm.get('description');
  }

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors?.['MustMatch']) {
        return
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ MustMatch: true });
      } else {
        matchingControl.setErrors(null)
      }
    }
  }

  constructor(private fb: FormBuilder) { }
  registrationForm = this.fb.group({
    userName: ['admin', Validators.required],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[!@#&()\-/$=<>?])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9!@#&()\-/$=<>?]+$'),
    Validators.minLength(5), Validators.maxLength(8)]],
    confirmPassword: ['', Validators.required],
    gender: ['', [Validators.required]],
    team: ['', [Validators.required]],
    dob: ['', [Validators.required]],
    hobby: ['', [Validators.required]],
    description: ['']
  },

    {
      validators: this.MustMatch('password', 'confirmPassword'),
    });

  checkWord(des: any) {

    const desarr = des.split(" ");
    if (desarr.length > 1499) {
      this.wordError = true
    } else {
      this.wordError = false
    }

  }
}
