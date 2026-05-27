  import { Component, signal } from '@angular/core';
 import {
  RouterLink,
  RouterOutlet,
  RouterModule,
  RouterLinkActive
} from '@angular/router';
  import { WorkExperience } from './work-experience/work-experience';
  import { Education } from './education/education';
  import { WorkTogether } from './work-together/work-together';
  import { HomePage } from './home-page/home-page';
  import { AboutPage } from './about-page/about-page';
  import { ContactPage } from './contact-page/contact-page';

  @Component({
  selector: 'app-root',
  standalone: true,

  imports: [
    RouterLinkActive,
    RouterModule,
    RouterLink,
    RouterOutlet,
    HomePage,
    AboutPage,
    ContactPage
  ],

  templateUrl: './app.html',
  styleUrl: './app.css'
})
  export class App {
    protected readonly title = signal('my-website');
  }
