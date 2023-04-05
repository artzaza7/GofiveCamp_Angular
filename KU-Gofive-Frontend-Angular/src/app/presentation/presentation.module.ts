import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PresentationComponent } from './presentation.component';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    component: PresentationComponent,
  }
]

@NgModule({
  declarations: [PresentationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [PresentationComponent]
})
export class PresentationModule { }
