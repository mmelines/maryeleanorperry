import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'navigation-routes',
  templateUrl: './navigation-routes.component.html',
  styleUrls: ['./navigation-routes.component.css'],
})

export class NavigationRoutesComponent implements OnInit {
  constructor(private location:Location, private router:Router) {};
  ngOnInit(): void {
    let inner_width:number = window.innerWidth;
    let window_size:string = (inner_width <= 650) ? 'sm' : 'lg';
    console.log("navroutes loaded @ " + window_size + " px, size " + inner_width);
    let inner_router:string = this.location.path();
    console.log("and path is " + inner_router)
    if (inner_router == '/navigation') {
      if (window_size =='lg') {this.router.navigate(['/'])}
    }
  }; 

}