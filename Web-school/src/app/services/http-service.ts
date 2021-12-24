import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  httpRequest<T>(type: string, url: string, body: unknown, params?: Record<string, string>, headers?: HttpHeaders): Observable<T> {
		return this.http
			.request<T>(type, url, {
				headers,
				body,
				params: new HttpParams({ fromObject: { ...params } }),
			})
	}
}
