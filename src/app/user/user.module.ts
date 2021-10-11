import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { ProfilModule } from './profil/profil.module';
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';


@NgModule({
  declarations: [
    UserComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule,
    ProfilModule
  ]
})
export class UserModule { }
