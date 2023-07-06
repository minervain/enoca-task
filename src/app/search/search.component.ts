import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  searchQuery: string | any;


  constructor(private apiService: ApiService) { }

  searchMovies(): void {
    this.apiService.query = this.searchQuery; // ApiService'deki query değişkenine arama sorgusunu ata
    this.apiService.getData().subscribe(
      (data: any) => {
        console.log(data); // Verileri konsola yazdır
      },
      (error: any) => {
        console.error(error); // Hata durumunda konsola yazdır
      }
    );
  }
}