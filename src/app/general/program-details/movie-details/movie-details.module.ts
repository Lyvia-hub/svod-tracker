import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { MovieDetailsComponent } from './movie-details.component';
import { MovieDetailsBannerComponent } from './movie-details-banner/movie-details-banner.component';
import { MovieDetailsInfosComponent } from './movie-details-infos/movie-details-infos.component';
import { MovieDetailsCastComponent } from './movie-details-cast/movie-details-cast.component';
import { MovieDetailsRoutingModule } from './movie-details-routing.module';



@NgModule({
  declarations: [
    MovieDetailsComponent,
    MovieDetailsBannerComponent,
    MovieDetailsInfosComponent,
    MovieDetailsCastComponent
  ],
  imports: [
    SharedModule,
    MovieDetailsRoutingModule
  ]
})
export class MovieDetailsModule { }
