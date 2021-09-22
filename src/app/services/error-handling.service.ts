import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlingService {

  constructor() { }
  handleError(error: HttpErrorResponse) {
    if (error.status > 400) {
      return throwError(error.error.errors);
    }
    else {
      return throwError('Unknown error');
    }
  }
}
