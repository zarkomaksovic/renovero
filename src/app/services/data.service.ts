import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class DataService {
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
