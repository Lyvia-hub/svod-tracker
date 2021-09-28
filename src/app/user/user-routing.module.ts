import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { ProfilComponent } from './profil/profil/profil.component';

const routes: Routes = [
  {
    path: 'app',
    children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'profil', component: ProfilComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
