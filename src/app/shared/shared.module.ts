import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { PrimeNgModule } from './modules/prime-ng.module';
import { AngularMaterialModule } from './modules/angular-material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';



@NgModule({
  declarations: [

    SidenavComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PrimeNgModule,
    NgxBootstrapModule,
    AngularMaterialModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    NgxBootstrapModule,
    PrimeNgModule,
    AngularMaterialModule,
    SidenavComponent
  ]
})
export class SharedModule { }
