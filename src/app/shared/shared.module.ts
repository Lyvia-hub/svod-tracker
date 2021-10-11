import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    PrimeNgModule,
    ReactiveFormsModule,
    SidenavComponent
  ]
})
export class SharedModule { }
