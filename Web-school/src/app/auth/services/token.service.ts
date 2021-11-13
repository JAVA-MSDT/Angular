import { Injectable } from '@angular/core';
import { AUTH_CONST } from 'src/app/appConfig/auth-const';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getToken(): string {
    return localStorage.getItem(AUTH_CONST.access_token);
  }

  saveToken(token): void {
    localStorage.setItem(AUTH_CONST.access_token, token);
  }

  removeToken(): void {
    localStorage.removeItem(AUTH_CONST.access_token);
  }

  setUserLoginStatus(userLoginStatus): void {
    localStorage.setItem(AUTH_CONST.is_user_in, userLoginStatus);
  }

  removeUserLoginStatus(): void {
    localStorage.removeItem(AUTH_CONST.is_user_in);
  }

  getUserLoginStatus(): string {
    return localStorage.getItem(AUTH_CONST.is_user_in);
  }
}
