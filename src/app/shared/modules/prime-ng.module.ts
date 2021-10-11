import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ToastModule } from 'primeng/toast';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    MenubarModule,
    MenuModule,
    ToastModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    MenuModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
