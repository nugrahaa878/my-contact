import { Routes } from '@angular/router';
import { HomeComponent } from './presenter/pages/home/home.component';
import { ContactDetailsComponent } from './presenter/pages/contact-details/contact-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'details',
    component: ContactDetailsComponent,
  },
];
