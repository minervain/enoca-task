import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home',
    pathMatch: 'full'
  }, // Ana sayfa için boş yolu yönlendir

  {
    path: 'home',
    component: HomeComponent
  },

  {
    path: 'detail',
    component: DetailComponent
  },

  {
    path: 'search',
    component: SearchComponent
  },
  { path: 'detail/:id', component: DetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
