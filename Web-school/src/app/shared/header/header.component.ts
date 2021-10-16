import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'web-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  constructor(private translate:  TranslateService) {
    translate.setDefaultLang('en');
  }

  ngOnInit(): void {}

  useLanguage(lang: string): void {
    this.translate.use(lang);
  }
}
