import { Component } from '@angular/core';

@Component({
  selector: 'app-about-page',
  imports: [],
  templateUrl: './about-page.html',
  styleUrl: './about-page.css',
})
export class AboutPage {
  copyEmail() {
    navigator.clipboard.writeText('dhruvdsaligram@gmail.com');
    alert('Email copied to clipboard!');
  }
}
