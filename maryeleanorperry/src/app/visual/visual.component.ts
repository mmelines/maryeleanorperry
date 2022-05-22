import { Component, OnInit } from '@angular/core';
import { visual, Visual } from '../visual'

@Component({
  selector: 'app-visual',
  templateUrl: './visual.component.html',
  styleUrls: ['./visual.component.css'],
})
export class VisualComponent implements OnInit {
  visual = visual;

  constructor() {};
  ngOnInit(): void {
  };
}