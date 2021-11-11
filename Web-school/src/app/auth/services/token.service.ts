import { Injectable } from '@angular/core';

export const ACCESS_TOKEN = 'access_token';
export const REFRESH_TOKEN = 'refresh_token';
export const USER_LOGIN_STATUS = 'isUserIn';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  constructor() {}

  getToken(): string {
    return localStorage.getItem(ACCESS_TOKEN);
  }

  saveToken(token): void {
    localStorage.setItem(ACCESS_TOKEN, token);
  }

  removeToken(): void {
    localStorage.removeItem(ACCESS_TOKEN);
  }

  setUserLoginStatus(userLoginStatus): void {
    localStorage.setItem(USER_LOGIN_STATUS, userLoginStatus);
  }

  removeUserLoginStatus(): void {
    localStorage.removeItem(USER_LOGIN_STATUS);
  }

  getUserLoginStatus(): string {
    return localStorage.getItem(USER_LOGIN_STATUS);
  }
}
