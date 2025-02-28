import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient
  ) { }

  httpRequest<T>(type: string, url: string, body: unknown, params?: Record<string, string>, headers?: HttpHeaders): Observable<T> {
    return this.http
      .request<T>(type, url, {
        headers,
        body,
        params: new HttpParams({ fromObject: { ...params } }),
      }).pipe(map(
        (response) => response,
        (error) => {
          this.buildErrorMessage(error);
          return throwError(() => error);
        }
      ))
  }

  private buildErrorMessage(err: any) {
    const errorObj = { statusCode: err.status, errorMessage: err.message, dateTime: new Date() };
    console.error(errorObj);
  }
}
