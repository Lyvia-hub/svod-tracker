import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfilEditRoutingModule } from './profil-edit-routing.module';
import { ProfilEditComponent } from './profil-edit.component';



@NgModule({
  declarations: [
    ProfilEditComponent
  ],
  imports: [
    SharedModule,
    ProfilEditRoutingModule
  ]
})
export class ProfilEditModule { }
