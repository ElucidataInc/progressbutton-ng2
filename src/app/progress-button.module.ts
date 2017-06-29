import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdIconModule} from '@angular/material';

import { ProgressButtonComponent } from './progress-button/progress-button.component'

@NgModule({
  declarations: [
    ProgressButtonComponent
  ],
  imports: [
    BrowserModule,
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
