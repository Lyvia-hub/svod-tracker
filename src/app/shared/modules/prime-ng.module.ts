import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    TabViewModule,
    DialogModule
  ],
  exports: [
    CarouselModule,
    TabViewModule,
    DialogModule
  ]
})
export class PrimeNgModule { }
