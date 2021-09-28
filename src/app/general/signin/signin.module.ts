import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    SharedModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
