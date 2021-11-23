import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    TabViewModule
  ],
  exports: [
    CarouselModule,
    TabViewModule
  ]
})
export class PrimeNgModule { }
