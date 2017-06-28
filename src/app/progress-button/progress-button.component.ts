import { Component } from '@angular/core';
import { State } from './state';
@Component({
  selector: 'progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.css']
})

export class ProgressButtonComponent {
  private state: State;
  private icon: string;
  private disabledstate: boolean;
  private states: string[] = ['initial', 'inprogress', 'done', 'error'];
  private defaultColor: string[] = ['#337ab7', '#a9a9a9', '#5cb85c', '#d9534f'];
  constructor() {
      this.icon = (this.icon) ? this.icon : 'file_upload';
  }

  private text(): string {
      if (!this.state.text) {
          return this.state.value;
      } else {
          return this.state.text;
      }
  }
  private color(): string {
      if (!this.state.color) {
          for (let i = 0; i < 4; i++) {
              if (this.state.value == this.states[i]) {
                  return this.defaultColor[i];
              }
          }
          return this.defaultColor[0];
      } else {
          return this.state.color;
      }
  }
}
