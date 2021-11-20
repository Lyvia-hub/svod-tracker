import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationModule, PaginationConfig } from 'ngx-bootstrap/pagination';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaginationModule.forRoot()
  ],
  exports: [
    PaginationModule
  ],
  providers: [
    PaginationConfig
  ]
})
export class NgxBootstrapModule { }
