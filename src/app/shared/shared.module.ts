import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNgModule } from './modules/prime-ng.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    CommonModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
