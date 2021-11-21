import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';


@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
