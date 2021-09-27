import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { GeneralModule } from '../general/general.module';
import { UserModule } from '../user/user.module';
import { ProgramsModule } from '../programs/programs.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    GeneralModule,
    UserModule,
    ProgramsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
