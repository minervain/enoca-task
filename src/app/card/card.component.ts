import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  movies: any[] = [];
  @Input() searchResults!: any[];
  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiService.getPopularMovies().subscribe(
      (data: any) => {
        this.movies = data.results.slice(0, 4);
      },
      (error: any) => {
        console.error('Hata:', error);
      }
    );
  }

  // Diğer bileşen fonksiyonları...

  getImageUrl(posterPath: string) {
    if (posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    }
    return '../../assets/Ekran görüntüsü 2023-07-04 144127.png';
  }

  redirectToDetails(movieId: string) {
    this.router.navigate(['/detail', movieId]);
  }
}
