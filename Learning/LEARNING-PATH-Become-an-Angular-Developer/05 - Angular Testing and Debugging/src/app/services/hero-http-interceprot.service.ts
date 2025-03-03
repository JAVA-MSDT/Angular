import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroHttpInterceprotService implements HttpInterceptor {
  private readonly API_URL = '/mock/api/heros';
  private readonly STORAGE_KEY = 'MOCK_API_FILTER';
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url === this.API_URL && req.method === 'GET') {
      return this.getFilter();
    }

    if (req.url === this.API_URL && req.method === 'PUT') {
      return this.setFilter(req.body);
    }
    return next.handle(req);
  }

  private getFilter(): Observable<HttpResponse<string>> {
    return new Observable((observer) => {
      observer.next(
        new HttpResponse<string>({
          status: 200,
          body: window.localStorage.getItem(this.STORAGE_KEY),
        })
      );
      observer.complete();
    });
  }

  private setFilter(requsetBody: string): Observable<HttpResponse<string>> {
    window.localStorage.setItem(this.STORAGE_KEY, requsetBody);
    return this.getFilter();
  }
}
