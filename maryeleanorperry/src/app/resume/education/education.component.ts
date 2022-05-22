import { Component, OnInit } from '@angular/core';
import { education } from '../education';

@Component({
  selector: 'resume-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})

export class EducationComponent implements OnInit {
  education = education

  constructor() {};
  ngOnInit(): void {
  };
}