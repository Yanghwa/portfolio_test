//App component used for app module. it loads home and about component

import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent }  from './components/home.component';
import { AboutComponent }  from './components/about.component';

//setting selector and template then it can be used in view as a tag - including two components inside
@Component({
    selector: 'my-app', 
    template: `
    <my-home></my-home>
    <my-about></my-about>
  `,
    directives: [ROUTER_DIRECTIVES],
})

//export this class as AppComponent
export class AppComponent {
}
