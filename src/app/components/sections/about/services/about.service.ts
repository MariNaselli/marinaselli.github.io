import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private mockDataUrl = 'assets/mocks/about.json'; // Ruta del mock JSON

  constructor(private http: HttpClient) {}

  getAboutData(): Observable<any> {
    return this.http.get(this.mockDataUrl);
  }
}
