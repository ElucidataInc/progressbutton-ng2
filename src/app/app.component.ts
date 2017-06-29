import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  icon = "publish";
  state = {
      value: 'initial',
      text: 'initial',
      color: 'blue'
  };
  isDisabled = false;
  onClick():void {
    console.log("click")
  }
}
