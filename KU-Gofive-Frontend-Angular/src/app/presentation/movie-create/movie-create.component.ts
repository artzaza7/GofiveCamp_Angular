import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MovieModel } from 'src/app/core/model/movie.model';
import { MovieEntity } from 'src/app/entity/movie.entity';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.scss']
})
export class MovieCreateComponent implements OnInit {
  public form: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.maxLength(5)]),
    description: new FormControl(null, Validators.required),
    url: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required),
    runningTime: new FormControl(null, Validators.required),
    releaseDate: new FormControl(null, Validators.required),
  })
  constructor(private MovieService: MovieService) {
    console.log(this.form)
  }

  public submit(form: FormGroupDirective) {
    if (form.valid) {
      const data = form.value
      let model: MovieEntity = {
        _id: undefined,
        name: data.name,
        poster: data.url,
        summaries: data.description,
        category: data.category,
        runningTime: data.runningTime,
        releaseDate: data.releaseDate
      }
      this.MovieService.addMovie(model).subscribe(response => {
        console.log(response)
        // this.router.navigationByUrl('/')
      })
    }
  }
  ngOnInit() {
  }

}
