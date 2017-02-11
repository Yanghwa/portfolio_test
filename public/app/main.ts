//File name: main.ts
//Author's name: Junghwan Yang
//web site name: www.junghwanyang.me
//file description: angular main seeting to load App module.

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
// import { AppComponent }         from './components/app.component';

platformBrowserDynamic().bootstrapModule(AppModule);
