import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {
  
  private mockDataResume = 'assets/mocks/resume.json';
  
  constructor(private http: HttpClient) { }

  getResumeData(): Observable<any> {
    return this.http.get<any>(this.mockDataResume);
  }
}
