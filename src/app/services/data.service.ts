import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';
import { ErrorHandlingService } from './error-handling.service';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  // create mock data for test
  mockData = {
    formTitle: 'Maler finden',
    buttonLabel: 'Kontaktdaten angeben',
    dropdownProps: {
      label: 'Welche Arbeit soll ausgeführt werden?*',
      formFieldTitle: 'title',
      placeholder: 'Leistung auswählen oder anfangen zu tippen',
      options: [
        'Kueche streichen',
        'Wand streichen',
        'Haus streichen, malen',
        'Zimmer streichen',
        'Wohnung streichen, malen',
        'Malerarbeiten',
        'Decke verputzen',
        'Wand verputzen',
      ],
    },
    textareaProps: {
      label: 'Beschreiben Sie die auszuführende Arbeiten:* ',
      formFieldTitle: 'description',
      rows: '10',
    },
    emailProps: {
      label: 'Email*',
      formFieldTitle: 'email',
    },
  };

  constructor(
    private http: HttpClient,
    private errorService: ErrorHandlingService
  ) {}

  postFormData({ title, description, email }) {
    const data = {
      title,
      description,
      place: {
        id: 2658937,
        placeName: 'Testplace',
        placeZip: '1234',
      },
      publisherAccountCreate: {
        email,
        phone: '0123456789',
        place: {
          id: 2658937,
          placeName: 'Testplace',
          placeZip: '1234',
        },
      },
    };

    console.log(data);
    return this.http
      .post(`${environment.baseUrl}tasks`, data)
      .pipe(
        retry(1),
        catchError(this.errorService.handleError)
      );
  }
}
