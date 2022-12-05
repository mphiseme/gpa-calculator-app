/*
Title: base-layout.component.ts
Author: Manel Phiseme
Date: 27 November 2022
Description: base-layout component for books app
*/

import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.css']
})
export class BaseLayoutComponent implements OnInit {
  assignment: string;

  constructor(private cookieService: CookieService, private router: Router) {
    this.assignment = 'GPA Calculator';
  }

  ngOnInit(): void {
  }
  signOut(){
    this.cookieService.deleteAll();
    this.router.navigate(['/session/sign-in']);
  }

}
