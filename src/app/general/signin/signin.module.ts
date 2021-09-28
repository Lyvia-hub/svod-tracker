import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SigninRoutingModule } from './signin-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SigninFormComponent } from './signin-form/signin-form.component';



@NgModule({
  declarations: [
    SigninComponent,
    SigninFormComponent
  ],
  imports: [
    SharedModule,
    SigninRoutingModule
  ]
})
export class SigninModule { }
