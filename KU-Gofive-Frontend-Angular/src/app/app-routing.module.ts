import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'create',
    loadChildren: () => import("./presentation/movie-create/movie-create.module").then((m) => m.MovieCreateModule)
  },
  {
    path: '',
    loadChildren: () => import("./presentation/movie/movie.module").then((m) => m.MovieModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
