import { Component, OnInit, Input } from '@angular/core';
import { State } from '../state';


@Component({
  selector: 'progress-button',
  template: `
    <button class="button-dimension" [style.background-color]="color()" 
        [disabled]="state.value == 'inprogress' || disabledstate==true" >
        <md-spinner *ngIf="state.value == 'inprogress'" class="progress-circle" color="primary"></md-spinner>
        <md-icon *ngIf="state.value == 'initial'" disabled="disabledstate==true" class="icon-fill">{{icon}}</md-icon>
        <md-icon *ngIf="state.value == 'done'" disabled="disabledstate==true" class="icon-fill">check_circle</md-icon>
        <md-icon *ngIf="state.value == 'error'" disabled="disabledstate==true" class="icon-fill">error</md-icon>
        <span class="state-text" [style.vertical-align]="state.value == 'inprogress' ? 'middle' : 'super'" 
            [attr.disabled]="state.value == 'inprogress' || disabledstate==true" >{{text()}}
        </span>
    </button>
  `,
  styles: [`
    .state-text {
        color: white;
    }

    .button-dimension {
        color: #333;
        background-color: #ccc;
        border-color: #ccc;
        min-height: 35px;
        min-width: 112px; 
        display: inline-block;
        padding: 6px 12px;
        margin-bottom: 0;
        font-size: 14px;
        font-weight: 400;
        line-height: 1.42857143;
        text-align: center;
        white-space: nowrap;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid transparent;
        font-family: inherit;
        text-transform: none;
        overflow: visible;
        margin: 0;
        color: inherit;
        align-items: flex-start;
        text-rendering: auto;
        letter-spacing: normal;
        word-spacing: normal;
        text-indent: 0px;
        text-shadow: none;
        font: inherit;
        box-sizing: border-box;
    }

    .icon-fill {
        color: #fff; 
    }

    .progress-circle {
        width: 20px;
        height: 20px;
        margin: 0px;
        vertical-align: middle;
        display: inline-block;
        pointer-events: none; 
    }

    md-icon[disabled] {
        pointer-events: none; 
    }

    span[disabled] {
        pointer-events: none; 
    }

    :disabled {
        opacity: 0.65;
        cursor: not-allowed;
        box-shadow: none;
    }`
  ]
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
