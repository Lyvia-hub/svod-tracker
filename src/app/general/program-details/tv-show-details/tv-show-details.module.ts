import { NgModule } from '@angular/core';

import { TvShowDetailsRoutingModule } from './tv-show-details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TvShowDetailsComponent } from './tv-show-details.component';


@NgModule({
  declarations: [
    TvShowDetailsComponent
  ],
  imports: [
    SharedModule,
    TvShowDetailsRoutingModule
  ]
})
export class TvShowDetailsModule { }
