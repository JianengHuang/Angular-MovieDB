import { Component, type OnInit } from '@angular/core';
import type { MovieSearchResult } from '../interfaces/movie';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  movies: MovieSearchResult['Search'] = [];
  id: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getMovies(this.route.snapshot.paramMap.get('title') || '');
  }

  getMovies(title: string) {
    fetch(`/api/movies/?s=${title}`)
      .then((response) => response.json())
      .then((json) => (this.movies = json.data.Search));
  }
}
