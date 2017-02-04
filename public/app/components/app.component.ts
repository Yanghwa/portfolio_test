import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { HomeComponent }  from './components/home.component';
import { AboutComponent }  from './components/about.component';

@Component({
    selector: 'my-app', 
    template: `
    <my-home></my-home>
    <my-about></my-about>
  `,
    directives: [ROUTER_DIRECTIVES],
})
export class AppComponent {
}
