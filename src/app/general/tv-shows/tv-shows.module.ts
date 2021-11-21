import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { TvShowsRoutingModule } from './tv-shows-routing.module';
import { TvShowsComponent } from './tv-shows/tv-shows.component';



@NgModule({
  declarations: [
    TvShowsComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    TvShowsRoutingModule
  ]
})
export class TvShowsModule { }
