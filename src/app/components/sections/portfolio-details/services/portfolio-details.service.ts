import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioDetailsService {

  private mockDataDetails = 'assets/mocks/details.json';

  constructor(private http: HttpClient) { }

  getDetailsData(): Observable<any> {
    return this.http.get<any>(this.mockDataDetails);
  }

}
