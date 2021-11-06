import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilEditComponent } from './profil-edit.component';
const routes: Routes = [
  {
    path: '',
    component: ProfilEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProfilEditRoutingModule { }
