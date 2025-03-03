import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { CustomErrorHandlingService } from './services/custom-error-handling.service';
import { HighlightSearchPipe } from './pipes/highlight-search.pipe';
import { HeroHttpInterceprotService } from './services/hero-http-interceprot.service';

@NgModule({
  declarations: [AppComponent, HeroesComponent, HighlightSearchPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [
    { provide: ErrorHandler, useClass: CustomErrorHandlingService },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HeroHttpInterceprotService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
