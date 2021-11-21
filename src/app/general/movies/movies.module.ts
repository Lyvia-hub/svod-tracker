import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'primeng/api';
import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './movies.component';

import { MatPaginatorModule } from '@angular/material/paginator';




@NgModule({
  declarations: [
    MoviesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    MatPaginatorModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
