import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home.component';
import { ContactComponent } from './modules/contact/pages/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contact', component: ContactComponent }
];
