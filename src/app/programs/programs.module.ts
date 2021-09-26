import { NgModule } from '@angular/core';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ProgramDetailsModule } from './program-details/program-details.module';
import { SharedModule } from 'primeng/api';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ProgramsRoutingModule,
    ProgramDetailsModule
  ]
})
export class ProgramsModule { }
