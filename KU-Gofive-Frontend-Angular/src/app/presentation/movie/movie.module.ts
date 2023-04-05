import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieListModule } from '../movie-list/movie-list.module';
import { MovieService } from 'src/app/service/movie.service';

export const routes: Routes=[
  {
    path: '',
    component:MovieComponent,
  }
]

@NgModule({
  declarations: [
    MovieComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MovieListModule
  ],
  exports:[
    MovieComponent
  ],
  providers:[
    MovieService
  ]
})
export class MovieModule { }
