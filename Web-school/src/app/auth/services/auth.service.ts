import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { USERS } from 'src/app/mocking/users-mock';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private tokenService: TokenService) {}

  login(loginData: any): boolean {
    let isUserExists = false;
    USERS.forEach((user) => {
      if (
        user.username === loginData.username &&
        user.password === loginData.password
      ) {
        isUserExists = true;
        this.tokenService.saveToken('true');
        this.tokenService.setUserLoginStatus('true');
      }
    });
    return isUserExists;
  }

  logout(): void {
    this.tokenService.removeToken();
    this.tokenService.removeUserLoginStatus();
  }
}
