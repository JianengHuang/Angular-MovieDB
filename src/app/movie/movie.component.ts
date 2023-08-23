import { Component, type OnInit, Input } from '@angular/core';
import type { MovieDetailsResult } from '../interfaces/movie';
import { initializeMovie } from './utils/initializeMovie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: MovieDetailsResult = initializeMovie;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    fetch(`/api/movies?i=${this.route.snapshot.paramMap.get('id')}`)
      .then((response) => response.json())
      .then((json) => (this.movie = json.data));
  }
}
