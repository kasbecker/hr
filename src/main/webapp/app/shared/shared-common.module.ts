import { NgModule } from '@angular/core';

import { HrSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [HrSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [HrSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class HrSharedCommonModule {}
