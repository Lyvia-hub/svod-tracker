import { NgModule } from '@angular/core';

import { GeneralRoutingModule } from './general-routing.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    GeneralRoutingModule,
    HomeModule
  ]
})
export class GeneralModule { }
