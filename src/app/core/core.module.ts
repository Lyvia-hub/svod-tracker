import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeneralModule } from '../general/general.module';
import { UserModule } from '../user/user.module';
import { ProgramsModule } from '../programs/programs.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GeneralModule,
    UserModule,
    ProgramsModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded.');
    }
  }
}
