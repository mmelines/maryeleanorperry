import { Component, OnInit } from '@angular/core';
import { experience } from '../experience';

@Component({
  selector: 'resume-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
})

export class ExperienceComponent implements OnInit {
  experience = experience;

  constructor() {};
  ngOnInit(): void {
  };
}