import { Component, OnInit, Input } from '@angular/core';
import { State } from '../state';
@Component({
  selector: 'progress-button',
  templateUrl: './progress-button.component.html',
  styleUrls: ['./progress-button.component.css']
})

export class ProgressButtonComponent implements OnInit{
  @Input() state: State;
  @Input() icon: string;
  @Input() disabledstate: boolean;
  states: string[] = ['initial', 'inprogress', 'done', 'error'];
  defaultColor: string[] = ['#337ab7', '#a9a9a9', '#5cb85c', '#d9534f'];
  
  constructor() {
      
  }

  /**
   * @returns void
   * initializes icon with default icon 'file_upload'
   */
  ngOnInit(): void {
      this.icon = (this.icon) ? this.icon : 'file_upload';
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
