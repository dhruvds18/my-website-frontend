import { Component } from '@angular/core';
import { WorkExperience } from '../work-experience/work-experience';
import { Education } from '../education/education';
import { WorkTogether } from '../work-together/work-together';

@Component({
  selector: 'app-home-page',
  imports: [
    WorkExperience,
    Education,
    WorkTogether
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
})
export class HomePage {
  copyEmail() {
  navigator.clipboard.writeText('dhruvdsaligram@gmail.com');

  alert('Email copied to clipboard!');
}

scrollToWorkExperience() {
  const element = document.getElementById('work_experience');
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
}
