import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TutorialComponent } from './pages/tutorial/tutorial.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, children: [
    { path: 'tutorial', component: TutorialComponent }
  ]},
];
