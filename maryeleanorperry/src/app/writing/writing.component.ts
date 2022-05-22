import { Component, OnInit } from '@angular/core';
import { writing } from '../writing';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css'],
})
export class WritingComponent implements OnInit {
  writing = writing;

  constructor() {};
  ngOnInit(): void {
  };
}