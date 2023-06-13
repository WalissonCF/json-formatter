import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './components/button/button.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';

@NgModule({
  declarations: [
    ButtonComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    PopUpComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
