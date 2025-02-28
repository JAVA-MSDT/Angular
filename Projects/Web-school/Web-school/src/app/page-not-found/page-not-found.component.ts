import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ROUTER_PATH } from '../appConfig/router-path-const';

@Component({
  selector: 'web-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit(): void {
  }

  backToHomePage(): void {
this.router.navigate([ROUTER_PATH.homePage]);
  }
}
