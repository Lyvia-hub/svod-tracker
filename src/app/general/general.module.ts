import { NgModule } from '@angular/core';

import { GeneralRoutingModule } from './general-routing.module';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { SigninModule } from './signin/signin.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    GeneralRoutingModule,
    HomeModule,
    LoginModule,
    SigninModule
  ]
})
export class GeneralModule { }
