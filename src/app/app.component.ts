import { Component } from '@angular/core';
import {State} from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  icon: string = "publish";

  isDisabled: boolean = false;

  stateNo: number = 0;

  initialStateObject:  State = {
    'value':'initial',
    'text':'Upload',
    'color':'#337ab7'
  };

  progressStateObject:  State = {
    'value':'inprogress',
    'text':'Uploading',
    'color':'#a9a9a9'
  };

  doneStateObject:  State = {
    'value':'done',
    'text':'done',
    'color':'#5cb85c'
  };

  errorStateObject:  State = {
    'value':'error',
    'text':'error',
    'color':'#d9534f'
  };

  stateObject:  State[]  = [
    this.initialStateObject,
    this.doneStateObject,
    this.errorStateObject,
    this.progressStateObject
  ];

  /**
   * @param  {number} state
   * @returns void
   * change state of progress-button
   */
  changeState(state: number): void{
    this.stateNo = state;
  }

}
