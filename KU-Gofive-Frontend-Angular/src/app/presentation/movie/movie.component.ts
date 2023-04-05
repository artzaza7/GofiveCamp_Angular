import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieModel } from 'src/app/core/model/movie.model';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  public movies: MovieModel[] = [] 
  constructor(private MovieService: MovieService){
    this.getMovieList()
  }

  private getMovieList(){
    this.MovieService.getMovieList().subscribe(response =>{
      console.log(response)
      this.movies = response
    })
  }

  public onRemove(movieId: string){
    this.MovieService.deleteMovie(movieId).subscribe(response => {
      this.getMovieList()
    })
  }

}

