import { NgModule } from '@angular/core';

import { SharedModule } from 'primeng/api';
import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { TvShowsComponent } from './tv-shows/tv-shows.component';


@NgModule({
  declarations: [
    TvShowsComponent
  ],
  imports: [
    SharedModule,
    TvShowsRoutingModule
  ]
})
export class TvShowsModule { }
