import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapModule } from './modules/ngx-bootstrap.module';
import { PrimeNgModule } from './modules/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './components/sidenav/sidenav.component';



@NgModule({
  declarations: [

    SidenavComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule,
    NgxBootstrapModule
  ],
  exports: [
    CommonModule,
    NgxBootstrapModule,
    PrimeNgModule,
    ReactiveFormsModule,
    SidenavComponent
  ]
})
export class SharedModule { }
