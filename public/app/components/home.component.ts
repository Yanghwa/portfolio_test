//Home componenet inside of app component.

import { Component } from '@angular/core';

//setting the selector and template then is can be used as a tag in view
@Component({
  selector: 'my-home',
  templateUrl: 'app/templates/home.ejs',
})

//exports this class as HomeComponent
export class HomeComponent {
  title = 'Home';
}