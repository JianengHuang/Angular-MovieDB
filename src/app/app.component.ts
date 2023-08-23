import { Component, type OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    console.log('Start of the project');
  }

  title: string = '';

  getMovies(title: string) {
    fetch(`/api/movies/?t=${title}`)
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
}
