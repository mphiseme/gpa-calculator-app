/*
Title: sign-in.component.ts
Author: Manel Phiseme
Date: 27 December 2022
Description: home component for gpa app
*/

import { Component, OnInit } from '@angular/core';
import { SignInService } from '../sign-in.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';



@Component({

  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signinForm  = new FormGroup({
    studentId: new FormControl(),
    password: new FormControl()
  });

  //signinForm !:FormGroup

  errorMessage !:string;

  constructor(private router: Router, private cookieService:CookieService,
    private fb: FormBuilder, private signinService:SignInService) { }

  ngOnInit(): void {
    this.signinForm = this.fb.group({studentId:
      ['', Validators.compose([Validators.required, Validators.pattern('^[0-9]*$')])],

      password:""
    })
  }
  get(){
    return this.signinForm.controls;
  }
  onSubmit(){
    const formValues =this.signinForm.value;
    const studentId = parseInt(formValues.studentId)
    if (this.signinService.validate(studentId)){
      this.cookieService.set('session_user',studentId.toString(), 1)
      this.router.navigate(['/'])
    } else {
      this.errorMessage = `The student ID you entered is invalid, please try again`;
    }
  }


}
