import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MovieModel } from 'src/app/core/model/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
  @Input() movie?: MovieModel
  @Output() remove: EventEmitter<string> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  public onRemoveMovie(){
    this.remove.emit(this.movie?.id)
  }

}
