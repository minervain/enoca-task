import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get('https://example.com/api/data');

    
  }

}
export const environment = {
  production: false,
  apiKey: 'YOUR_API_KEY'
};