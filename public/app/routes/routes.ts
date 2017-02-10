//Router for components, but it's not used

import { provideRouter, RouterConfig }  from '@angular/router';

import { HomeComponent }  from '../components/home.component';
import { AboutComponent }  from '../components/about.component';
import { ContactComponent }  from '../components/contact.component';

const routes: RouterConfig = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  }

  // {
  //   path: 'detail/:id',
  //   component: HeroDetailComponent
  // },
  // {
  //   path: 'heroes',
  //   component: HeroesComponent
  // }
];

export const appRouterProviders = [
    provideRouter(routes)
];