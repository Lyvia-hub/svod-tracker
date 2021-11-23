import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieDetailsRoutingModule } from './movie-details/movie-details-routing.module';


@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    MovieDetailsRoutingModule
  ]
})
export class ProgramDetailsModule { }
