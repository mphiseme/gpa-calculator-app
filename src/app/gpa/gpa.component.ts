/*
Title: gpa.component.ts
Author: Manel Phiseme
Date: 27 November 2022
Description: gpa component for books app
*/

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-gpa',
  templateUrl: './gpa.component.html',
  styleUrls: ['./gpa.component.css']
})
export class GpaComponent implements OnInit {
  @Input() gpaTotal!: number;

  constructor() { }

  ngOnInit(): void {
  }

}
