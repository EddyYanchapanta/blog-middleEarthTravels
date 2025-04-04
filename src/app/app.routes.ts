import { ViewPostComponent } from './pages/view-post/view-post.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewPostComponent } from './pages/new-post/new-post.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'new', component: NewPostComponent },
  {
    path: 'post/:idTravel',
    component: ViewPostComponent,
  },
  { path: '**', redirectTo: 'home' },
];
