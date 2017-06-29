import { Component, OnInit, Input } from '@angular/core';
import { State } from './state';
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

  ngOnInit(): void {
      this.icon = (this.icon) ? this.icon : 'file_upload';
  }


  text(): string {
      if (!this.state.text) {
          return this.state.value;
      } else {
          return this.state.text;
      }
  }
  color(): string {
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
