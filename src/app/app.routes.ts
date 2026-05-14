import {Routes} from '@angular/router';
import {LandingPageLayout} from './components/layouts/landing-page-layout/landing-page-layout';
import {DashboardPageLayout} from './components/layouts/dashboard-page-layout/dashboard-page-layout';
import {LoginPageLayout} from './components/layouts/login-page-layout/login-page-layout';

export const routes: Routes = [
  {path: '', component: LandingPageLayout},
  {path: 'login', component: LoginPageLayout},
  {path: 'dashboard', component: DashboardPageLayout}
];
