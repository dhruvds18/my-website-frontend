import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'home',
    loadComponent: () =>
      import('./home-page/home-page').then(m => m.HomePage)
  },

  {
    path: 'about',
    loadComponent: () =>
      import('./about-page/about-page').then(m => m.AboutPage)
  },

  {
    path: 'contact',
    loadComponent: () =>
      import('./contact-page/contact-page').then(m => m.ContactPage)
  },

  { path: '**', redirectTo: '/home' }
];