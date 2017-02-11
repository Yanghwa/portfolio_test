//File name: about.component.ts
//Author's name: Junghwan Yang
//web site name: www.junghwanyang.me
//file description: About Component inside of app component, 

import { Component } from '@angular/core';

//setting selector and template then can be used in view as tag
@Component({
  selector: 'my-about',
  templateUrl: 'app/templates/about.ejs'
})

//exports this class as AboutComponent
export class AboutComponent {
  title = 'About';
}