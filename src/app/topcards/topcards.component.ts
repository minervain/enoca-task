import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-topcards',
  templateUrl: './topcards.component.html',
  styleUrls: ['./topcards.component.scss']
})
export class TopcardsComponent {
  movies: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getTopRatedgMovies().subscribe(
      (movies:any) => {
        this.movies = movies;
        console.log(this.movies);
      },
      (error:any) => {
        console.log(error);
      }
    );
    
    }
    getFullPosterUrl(posterPath: string): string {
      return 'https://image.tmdb.org/t/p/w500' + posterPath;
    }
  }
    