import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HrSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [HrSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [HrSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HrSharedModule {
  static forRoot() {
    return {
      ngModule: HrSharedModule
    };
  }
}
