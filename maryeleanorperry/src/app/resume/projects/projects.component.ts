import { Component, OnInit } from '@angular/core';
import { projects } from '../projects';

@Component({
  selector: 'resume-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects = projects

  constructor() {};
  ngOnInit(): void {
  };
}