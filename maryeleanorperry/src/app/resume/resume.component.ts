import { Component, OnInit } from '@angular/core';
import { resume } from '../resume';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
})

export class ResumeComponent implements OnInit {
  resume = resume

  constructor() {};
  ngOnInit(): void {
  };
}