import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  movieId: string|any;
  movieDetails: any[] = []; // Detayları tutan dizi

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id');
      this.getMovieDetails(); // Movie detaylarını almak için hizmeti çağırın
    });
  }

  getMovieDetails() {
    this.apiService.getDetailsById(this.movieId).subscribe(
      (response: any) => {
        this.movieDetails = [response]; // Veriyi bir diziye dönüştürerek atayın
        console.log(this.movieDetails);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getImageUrl(posterPath: string) {
    if (posterPath) {
      return `https://image.tmdb.org/t/p/w500${posterPath}`;
    }
    return '../../assets/Ekran görüntüsü 2023-07-04 144127.png';
  }

}