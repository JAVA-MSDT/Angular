import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  TranslateModule,
  TranslateLoader,
  TranslateService,
} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ScrollTopComponent } from './scroll-top/scroll-top.component';
import { FilterPipe } from '../pipes/filterPipe.pipe';
import { HighlightSearchPipe } from '../pipes/highlight-search.pipe';
import { CourseBorderStyleDirective } from '../directives/course-border-style.directive';
import { DurationFormatterPipe } from '../pipes/duration-formatter.pipe';
import { OrderByPipe } from '../pipes/order-by.pipe';

// loader module
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ScrollTopComponent,
    FilterPipe,
    HighlightSearchPipe,
    CourseBorderStyleDirective,
    DurationFormatterPipe,
    OrderByPipe,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  providers: [TranslateService],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    TranslateModule,
    ScrollTopComponent,
    FilterPipe,
    HighlightSearchPipe,
    CourseBorderStyleDirective,
    DurationFormatterPipe,
    OrderByPipe,
  ],
})
export class SharedModule {}
