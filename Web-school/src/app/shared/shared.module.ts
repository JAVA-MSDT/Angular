import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LoginComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, LoginComponent],
})
export class SharedModule {}
