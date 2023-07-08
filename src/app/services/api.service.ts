import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiKey: string='2bbb7dd7886a9f864b551963758f3bc1'
  
   query:string|any;
   searchResults: any[] = [];
   constructor(private http: HttpClient) { }
  getTopMovies() {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/popular?api_key=" + this.apiKey)
  }

  getNowPlayingMovies() {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/now_playing?api_key=" + this.apiKey)
  }

  getTopRatedgMovies() {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/top_rated?api_key=" + this.apiKey)
  }

  getPopularMovies() {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/popular?api_key=" + this.apiKey)
  }

  getMoviesByCategory(category: string){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/?api_key=${category}` + this.apiKey)
  }

  getDetailsById(movieId: string){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${movieId}language=en-US?api_key=` + this.apiKey)
  }

  getReviewById(movieId: string){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/?api_key=${movieId}/reviews` + this.apiKey)
  }

 searchMovies(query: string): Observable<any> {
    const apiUrl = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${this.apiKey}`;
    return this.http.get<any>(apiUrl).pipe(
      tap((data: any) => {
        this.searchResults = data.results;
      })
    );
  }
}