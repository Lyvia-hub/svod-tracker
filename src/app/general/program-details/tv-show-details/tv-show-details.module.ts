import { NgModule } from '@angular/core';

import { TvShowDetailsRoutingModule } from './tv-show-details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TvShowDetailsComponent } from './tv-show-details.component';
import { TvShowDetailsCastComponent } from './tv-show-details-cast/tv-show-details-cast.component';
import { TvShowDetailsInfosComponent } from './tv-show-details-infos/tv-show-details-infos.component';
import { TvShowDetailsBannerComponent } from './tv-show-details-banner/tv-show-details-banner.component';


@NgModule({
  declarations: [
    TvShowDetailsComponent,
    TvShowDetailsCastComponent,
    TvShowDetailsInfosComponent,
    TvShowDetailsBannerComponent
  ],
  imports: [
    SharedModule,
    TvShowDetailsRoutingModule
  ]
})
export class TvShowDetailsModule { }
