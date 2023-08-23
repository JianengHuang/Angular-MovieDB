import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MovieComponent } from './movie/movie.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [AppComponent, MovieComponent, SearchComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
