import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ROUTER_PATH } from 'src/app/appConfig/router-path-const';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'web-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username = '';
  password = '';
  isLoadingResults = false;
  credintialError = false;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  onFormSubmit(): void {
    this.isLoadingResults = true;
    let isIn = this.authService.login(this.loginForm.value);
    if (isIn) {
      this.isLoadingResults = false;
      this.router.navigate([ROUTER_PATH.contextPath + ROUTER_PATH.coursesPage]);
    } else {
      this.credintialError = true;
    }
  }
}
