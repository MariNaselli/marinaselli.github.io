import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private mockDataPortfolio = 'assets/mocks/portfolio.json';

  constructor(private http: HttpClient) { }
  
  getPortfolioData(): Observable<any> {
    return this.http.get<any>(this.mockDataPortfolio);
  }

}
