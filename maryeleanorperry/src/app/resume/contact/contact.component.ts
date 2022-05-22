import { Component, OnInit } from '@angular/core';
import { contacts } from '../../contact';

@Component({
  selector: 'resume-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contacts = contacts

  constructor() {};
  ngOnInit(): void {
  };
}