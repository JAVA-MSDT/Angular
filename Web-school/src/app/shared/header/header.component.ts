import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  constructor(private translate:  TranslateService, private router: Router) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {}

  useLanguage(lang: string): void {
    this.translate.use(lang);
  }

  goToCourses(): void {
    this.router.navigate(['/courses']);
  }
  goToLogin(): void {
    this.router.navigate(['/']);
  }
}
