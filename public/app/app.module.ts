//File name: app.module.ts
//Author's name: Junghwan Yang
//web site name: www.junghwanyang.me
//file description: App module to use each component
//this angular uses only one module - app

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }         from './components/app.component';
import { HomeComponent }  from './components/home.component';
import { AboutComponent }  from './components/about.component';
// import { ContactComponent }  from './components/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }