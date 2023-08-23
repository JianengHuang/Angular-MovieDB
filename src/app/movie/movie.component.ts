import { Component, type OnInit, Input } from '@angular/core';
import type { MovieDetailsResult } from '../interfaces/movie';
import { initializeMovie } from './utils/initializeMovie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  @Input() movieId: string = '';
  movie: MovieDetailsResult = initializeMovie;

  ngOnInit() {
    fetch(`/api/movies?i=${this.movieId}`)
      .then((response) => response.json())
      .then((json) => (this.movie = json.data));
  }
}
