import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

import { MainComponent } from './layouts/main/main.component';


export const routes: Routes = [
  {
    path: '',
    title: 'Main Component',
    component: MainComponent,
    children: [
      {
        path: '',
        title: 'Home',
        component: HomeComponent,
      },
      {
        path: 'home',
        title: 'Home',
        component: HomeComponent,
      },
      
    ],
  },
  
];
