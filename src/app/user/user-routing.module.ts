import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/core/guards/auth.guard'
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'profil',
        loadChildren: () => import('./profil/profil.module').then(m => m.ProfilModule)
      },
      {
        path: 'profil/edit',
        loadChildren: () => import('./profil/profil-edit/profil-edit.module').then(m => m.ProfilEditModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
