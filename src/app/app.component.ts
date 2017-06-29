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

  toProgressState(): void{
    this.stateNo = 3;
  }

  toInitialState(): void{
    this.stateNo = 0;
  }

  toDoneState(): void{
    this.stateNo = 1;
  }

  toErrorState(): void{
    this.stateNo = 2;
  }

}
