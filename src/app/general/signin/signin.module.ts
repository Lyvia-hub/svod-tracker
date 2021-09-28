import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    SharedModule
  ]
})
export class SigninModule { }
