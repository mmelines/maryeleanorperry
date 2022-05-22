import { Component, OnInit } from '@angular/core';

import { hobbyist_tech_items } from '../technologies';
import { interest_tech_items } from '../technologies';
import { intermediate_tech_items } from '../technologies';

@Component({
  selector: 'resume-tech',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
})

export class TechComponent implements OnInit {
  hobbyist_tech_items = hobbyist_tech_items;
  interest_tech_items = interest_tech_items;
  intermediate_tech_items = intermediate_tech_items;
  
  constructor() {};
  ngOnInit(): void {
  };
}