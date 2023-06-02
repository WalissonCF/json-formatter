import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ACE_CONFIG, AceConfigInterface, AceModule } from 'ngx-ace-wrapper';
import { ClipboardModule } from 'ngx-clipboard';

import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';

const DEFAULT_ACE_CONFIG: AceConfigInterface = {};
@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    ReactiveFormsModule,
    PagesRoutingModule,
    ClipboardModule,
    CommonModule,
    SharedModule,
    AceModule,
  ],
  providers: [
    {
      provide: ACE_CONFIG,
      useValue: DEFAULT_ACE_CONFIG
    }
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PagesModule { }
