import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MdProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdIconModule} from '@angular/material';

import { ProgressButtonComponent } from './progress-button.component'

@NgModule({
  declarations: [
    ProgressButtonComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdProgressSpinnerModule,
    MdIconModule
  ],
  exports: [
     ProgressButtonComponent 
  ],
  providers: []
})
export class ProgressButtonModule { }
