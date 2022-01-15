import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselModule } from 'primeng/carousel';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { PickListModule } from 'primeng/picklist';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CarouselModule,
    TabViewModule,
    DialogModule,
    CalendarModule,
    PickListModule
  ],
  exports: [
    CarouselModule,
    TabViewModule,
    DialogModule,
    CalendarModule,
    PickListModule
  ]
})
export class PrimeNgModule { }
