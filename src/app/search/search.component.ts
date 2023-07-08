import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  query: string | any;
  searchResults: any[] = [];

  constructor(private apiService: ApiService) { }

  searchMovies(): void {
    this.apiService.query = this.query;
    this.apiService.searchMovies(this.query).subscribe(
      (data: any) => {
        this.searchResults = data.results;
      },
      (error: any) => {
        console.error(error);
      }
    );
  }
}
