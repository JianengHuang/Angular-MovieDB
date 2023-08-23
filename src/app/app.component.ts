import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = '';
  movies: any;

  getMovies(title: string) {
    fetch(`/api/movies/?s=${title}`)
      .then((response) => response.json())
      .then((json) => (this.movies = json.data));
    console.log(this.movies);
  }
}
