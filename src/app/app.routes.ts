import { Routes } from '@angular/router';
import { Index } from './pages/index';
import { Landing } from './pages/landing/landing';

export const routes: Routes = [
  { path: '', component: Index },
  { path: 'landing', component: Landing },
];