import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProgressButtonModule } from './progress-button/progress-button.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ProgressButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }