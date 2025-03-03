import { Injectable, ErrorHandler } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomErrorHandlingService implements ErrorHandler {
  constructor() {}

  handleError(error: any): void {
    console.error({
      timeStamp: new Date().toISOString(),
      message: error.message,
      zone: error.zone,
    });
  }
}
