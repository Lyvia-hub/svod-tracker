import { NgModule } from '@angular/core';

import { TvShowDetailsRoutingModule } from './tv-show-details-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    TvShowDetailsRoutingModule
  ]
})
export class TvShowDetailsModule { }
