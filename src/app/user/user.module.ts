import { NgModule } from '@angular/core';

import { UserRoutingModule } from './user-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ProfilModule } from './profil/profil.module';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    UserRoutingModule,
    DashboardModule,
    ProfilModule
  ]
})
export class UserModule { }
