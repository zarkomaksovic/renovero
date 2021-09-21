import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  
  constructor(private http: HttpClient) {}
  

  postFormData(data?) {
    data = {
      title: 'title test',
      description: 'desc test',
      place: {
        id: 2658937,
        placeName: 'Testplace',
        placeZip: '1234',
      },
      publisherAccountCreate: {
        email: 'test@test.test',
        phone: '0123456789',
        place: {
          id: 2658937,
          placeName: 'Testplace',
          placeZip: '1234',
        },
      },
    };

    return this.http
      .post(`${environment.baseUrl}tasks`, data)
      .pipe
      // catchError(this.errorService.handleError)
      ();
  }
}
