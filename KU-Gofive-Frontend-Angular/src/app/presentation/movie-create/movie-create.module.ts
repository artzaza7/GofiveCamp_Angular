import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieCreateComponent } from './movie-create.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieComponent } from '../movie/movie.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const routes: Routes = [
  {
    path: '',
    component: MovieCreateComponent,
  }
]

@NgModule({

  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [MovieCreateComponent],
  exports: [MovieCreateComponent]
})
export class MovieCreateModule { }
