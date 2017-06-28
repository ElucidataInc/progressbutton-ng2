import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdProgressSpinnerModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    MdProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
