import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ROUTER_PATH } from '../appConfig/router-path-const';

@Component({
  selector: 'web-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  logIn(): void {
    this.router.navigate([ROUTER_PATH.contextPath + ROUTER_PATH.loginPage]);
  }
}
