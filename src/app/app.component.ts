import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import type { MovieSearchResult } from './interfaces/movie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = '';
  movies: MovieSearchResult['Search'] = [];

  getMovies(title: string) {
    fetch(`/api/movies/?s=${title}`)
      .then((response) => response.json())
      .then((json) => (this.movies = json.data.Search));
  }

  openMovieDetails(movies: any) {
    console.log(movies);
  }
}
