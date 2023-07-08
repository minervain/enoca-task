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
  movieDetails: any; // Detayları tutan değişken

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.movieId = params.get('id');
      this.getMovieDetails(); // Movie detaylarını almak için hizmeti çağırın
    });
  }

  getMovieDetails() {
    this.apiService.getDetailsById(this.movieId).subscribe(
      (response) => {
        this.movieDetails = response;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}