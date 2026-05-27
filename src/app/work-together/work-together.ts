import { Component } from '@angular/core';

@Component({
  selector: 'app-work-together',
  imports: [],
  templateUrl: './work-together.html',
  styleUrl: './work-together.css',
})
export class WorkTogether {
  copyEmail() {
  navigator.clipboard.writeText('dhruvdsaligram@gmail.com');

  alert('Email copied to clipboard!');
}
}
