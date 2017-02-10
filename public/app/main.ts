//angular main seeting to load App module.

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';
// import { AppComponent }         from './components/app.component';

platformBrowserDynamic().bootstrapModule(AppModule);
