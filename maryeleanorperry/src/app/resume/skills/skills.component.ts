import { Component, OnInit } from '@angular/core';
import { skills } from '../skills';

@Component({
  selector: 'resume-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills = skills

  constructor() {};
  ngOnInit(): void {
  };
}