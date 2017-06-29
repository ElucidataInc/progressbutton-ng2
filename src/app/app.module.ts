import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MdIconModule} from '@angular/material';

import { AppComponent } from './app.component';
import { ProgressButtonComponent } from './progress-button/progress-button.component'

@NgModule({
  declarations: [
    AppComponent,
    ProgressButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdProgressSpinnerModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
