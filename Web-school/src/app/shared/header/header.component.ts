import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/services/auth.service';
import { USER_LOGIN_STATUS } from 'src/app/auth/services/token.service';

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
    this.isUserLoggedIn = localStorage.getItem(USER_LOGIN_STATUS) === 'true';
  }

  ngOnInit(): void {
  }

  useLanguage(lang: string): void {
    this.translate.use(lang);
  }

  goToCourses(): void {
    this.router.navigate(['/courses']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
