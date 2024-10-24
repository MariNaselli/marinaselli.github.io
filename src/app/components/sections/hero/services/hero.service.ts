import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private mockDataHero = 'assets/mocks/hero.json'; 

  constructor(private http: HttpClient) { }

  getHeroData(): Observable<any> {
    return this.http.get(this.mockDataHero);
  }
}
