import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { MovieModel } from '../core/model/movie.model';
import { MovieEntity } from '../entity/movie.entity';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }
  getMovieList(): Observable<MovieModel[]> {
    return this.http.get<MovieEntity[]>('https://crudcrud.com/api/f5e58c8c7bb548be9813d2814048b302/movie').pipe(map(movies => {
      return movies?.map((movie) => {
        let model: MovieModel = {
          id: movie._id,
          title: movie.name,
          coverUrl: movie.poster,
          description: movie.summaries,
          category: movie.category,
          runningTime: movie.runningTime,
          releaseDate: movie.releaseDate
        }
        return model
      })

    }))
  }

  addMovie(model: MovieEntity) : Observable<MovieEntity>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
    return this.http.post<MovieEntity>('https://crudcrud.com/api/f5e58c8c7bb548be9813d2814048b302/movie', JSON.stringify(model), httpOptions)
  }
  deleteMovie(movieId: string){
    return this.http.delete<MovieEntity>('https://crudcrud.com/api/f5e58c8c7bb548be9813d2814048b302/movie/' + movieId)
  }
}
