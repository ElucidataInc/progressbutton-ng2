import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressButtonComponent } from './progress-button/progress-button.component'

@NgModule({
  declarations: [
    AppComponent,
    ProgressButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
