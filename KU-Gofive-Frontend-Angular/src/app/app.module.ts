import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieComponent } from './presentation/movie/movie.component';
import { MovieModule } from './presentation/movie/movie.module';
import { MovieListModule } from './presentation/movie-list/movie-list.module';
import { MovieCreateModule } from './presentation/movie-create/movie-create.module';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MovieModule,
    MovieListModule,
    MovieCreateModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
