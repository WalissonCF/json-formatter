import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ACE_CONFIG, AceConfigInterface, AceModule } from 'ngx-ace-wrapper';
import { ClipboardModule } from 'ngx-clipboard';
import { SharedModule } from '../shared/shared.module';

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
  ]
})
export class PagesModule { }
