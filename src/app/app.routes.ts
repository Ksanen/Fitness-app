import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login'),
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register'),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found-page/not-found-page'),
  },
];
