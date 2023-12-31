import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router'; 
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { TopcardsComponent } from './topcards/topcards.component';
import { FooterComponent } from './footer/footer.component';
 

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    DetailComponent,
    CardComponent,
    TopcardsComponent,
    FooterComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
