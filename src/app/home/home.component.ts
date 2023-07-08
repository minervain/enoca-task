import { Component } from '@angular/core';
import { SearchComponent } from '../search/search.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  
    constructor(private apiService: ApiService) { }

}
