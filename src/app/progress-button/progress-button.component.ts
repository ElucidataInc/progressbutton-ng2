import { Component, Input } from '@angular/core';
import { State } from '../state';
import { template } from './progress-button.component.html';
import { styles } from './progress-button.component.css';

@Component({
  selector: 'progress-button',
  template: template,
  styles: [
      styles
  ]
})

export class ProgressButtonComponent{
  @Input() state: State;
  @Input() icon: string;
  @Input() disabledstate: boolean;
  states: string[] = ['initial', 'inprogress', 'done', 'error'];
  defaultColor: string[] = ['#337ab7', '#a9a9a9', '#5cb85c', '#d9534f'];
  
  constructor() {
      
  }


  /**
   * @returns string
   * returns state.value as default text if state.text is not defined
   */
  text(): string {
      if (!this.state.text) {
          return this.state.value;
      } else {
          return this.state.text;
      }
  }
  
  /**
   * @returns string
   * returns default color for different states if state.color is not defined
   */
  color(): string {
      if (!this.state.color) {
          for (let stateNo = 0; stateNo < 4; stateNo++) {
              if (this.state.value == this.states[stateNo]) {
                  return this.defaultColor[stateNo];
              }
          }
          return this.defaultColor[0];
      } else {
          return this.state.color;
      }
  }
}
