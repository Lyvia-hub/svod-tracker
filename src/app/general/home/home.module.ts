import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';



@NgModule({
  declarations: [
    HomeComponent,
    HomeBannerComponent,
    HomeFeaturesComponent
  ],
  imports: [
    SharedModule,
    RouterModule
  ]
})
export class HomeModule { }
