import { Component, OnInit } from '@angular/core';
import { hobbies } from '../hobbies';

@Component({
  selector: 'resume-hobbies',
  templateUrl: './hobbies.component.html',
  styleUrls: ['./hobbies.component.css'],
})
export class HobbiesComponent implements OnInit {
  hobbies = hobbies

  constructor() {};
  ngOnInit(): void {
  };
}