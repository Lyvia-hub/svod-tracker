import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieDetailsRoutingModule } from './movie-details/movie-details-routing.module';
import { TvShowDetailsModule } from './tv-show-details/tv-show-details.module';


@NgModule({
  declarations: [
  ],
  imports: [
    SharedModule,
    MovieDetailsRoutingModule,
    TvShowDetailsModule
  ]
})
export class ProgramDetailsModule { }
