import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WebStorageService {
  private readonly API_URL = '/mock/api/heros';
  constructor(private http: HttpClient) {}

  get(key: string): string | null {
    return window.localStorage.getItem(key);
  }

  set(key: string, value: string): void {
    window.localStorage.setItem(key, value);
  }

  getRemote(): Observable<string> {
    return this.http.get<string>(this.API_URL);
  }

  setRemote(payload: string): Observable<string> {
    return this.http.put<string>(this.API_URL, payload);
  }
}
