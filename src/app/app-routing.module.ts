import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterModule, type Routes } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { MovieComponent } from './movie/movie.component';

const routes: Routes = [
  { path: 'search/:title', component: SearchComponent },
  { path: 'movie/:id', component: MovieComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
