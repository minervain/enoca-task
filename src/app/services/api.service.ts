import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private apiKey: string = environment.apiKey;
   query:string|any;
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    const url = `https://api.themoviedb.org/3/search/movie?query=${this.query}&api_key=${this.apiKey}`;
    return this.http.get(url);
    
  }

}
export const environment = {
  production: false,
  apiKey: '2bbb7dd7886a9f864b551963758f3bc1'
};

