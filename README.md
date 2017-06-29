# ProgressbuttonNg2

It is a progress button with different states like `initial` , `inprogress` , `done` and `error`.
you can easily specify color, text, icon for the button.

## Install

you can install this package with npm

1. go to root directory of your project

2. update npmrc config file

    2.1 open npmrc file 

        vim ~/.npmrc

    2.2 add following lines to npmrc file for setting private and default npm registry

        registry=http://registry.npmjs.org/

        @eluci:registry=http://54.245.179.143:81/


3. install package

        npm install @eluci/progressbutton-ng2 --save
        

4. import in your project

        import { ProgressButtonModule } from '@eluci/progressbutton-ng2'


## How to use

you can use progress-button directive in your html template as

    ```html
    <progress-button [state]="stateObject" [disabledstate]="false" icon="publish" ></progress-button>
    ```

1. **state**

    you can specify the `state` along with its color and text to be displayed for button. you can pass a json
    object like

        stateObject = {

            'value': 'initial',

            'text': 'upload', `<optional>`

            'color': '#337ab7' `<optional>`
            
        }

2. **icon**
    
    you can specify `icon` for initial state. 
    
    > icon from [material icons library](https://material.io/icons/) only.

3. **disabledstate**
    
    you can also disable the button by setting `disabledstate` true.