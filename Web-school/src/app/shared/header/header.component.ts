import {
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  isUserLoggedIn: boolean = localStorage.getItem('isUserIn') === 'true';
  message = '';
  constructor(
    private translate: TranslateService,
    private router: Router,
    private authService: AuthService
  ) {
    translate.setDefaultLang('en');
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.isUserLoggedIn = localStorage.getItem('isUserIn') === 'true';
    console.log('Changesssss');
  }

  ngOnInit(): void {}

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
