import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardAddProgramComponent } from './dashboard-add-program/dashboard-add-program.component';



@NgModule({
  declarations: [
    DashboardComponent,
    DashboardAddProgramComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
