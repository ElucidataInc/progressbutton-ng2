
export let template: string =
`
    <button class="button-dimension" [style.background-color]="color()" 
        [disabled]="state.value == 'inprogress' || disabledstate==true" >
        <md-spinner *ngIf="state.value == 'inprogress'" class="progress-circle" color="primary"></md-spinner>
        <md-icon *ngIf="state.value == 'initial'" disabled="disabledstate==true" class="icon-fill">{{icon}}</md-icon>
        <md-icon *ngIf="state.value == 'done'" disabled="disabledstate==true" class="icon-fill">check_circle</md-icon>
        <md-icon *ngIf="state.value == 'error'" disabled="disabledstate==true" class="icon-fill">error</md-icon>
        <span class="state-text" [style.vertical-align]="state.value == 'inprogress' ? 'middle' : 'super'" 
            [attr.disabled]="state.value == 'inprogress' || disabledstate==true" >{{text()}}</span>
    </button>
`;
