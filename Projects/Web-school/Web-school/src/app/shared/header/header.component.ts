import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AUTH_CONST } from 'src/app/appConfig/auth-const';
import { ROUTER_PATH } from 'src/app/appConfig/router-path-const';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean;
  constructor(
    private translate: TranslateService,
    private router: Router,
    private authService: AuthService
  ) {
    translate.setDefaultLang('en');
  }
  ngDoCheck(): void {
    this.isUserLoggedIn = localStorage.getItem(AUTH_CONST.is_user_in) === 'true';
  }

  ngOnInit(): void {
  }

  useLanguage(lang: string): void {
    this.translate.use(lang);
  }

  goToCourses(): void {
    this.router.navigate([ROUTER_PATH.contextPath + ROUTER_PATH.coursesPage]);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate([ROUTER_PATH.homePage]);
  }
}
