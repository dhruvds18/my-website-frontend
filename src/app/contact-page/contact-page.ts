import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { DialogueBox } from '../dialogue-box/dialogue-box';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [
    FormsModule,
    DialogueBox
  ],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  name: string = '';
  email: string = '';
  subject: string = '';
  message: string = '';

  showDialog = false;
  isSuccess = false;

  constructor(private http: HttpClient) {}

sendMessage(form: NgForm) {
  const formData = {
    name: this.name,
    email: this.email,
    subject: this.subject,
    message: this.message,
  };

  this.http.post('https://my-website-backend-v8pl.onrender.com/api/contact', formData)
    .subscribe({
      next: (response) => {
        console.log('Message sent successfully', response);

        // SHOW SUCCESS DIALOG
        this.isSuccess = true;
        this.showDialog = true;

        // Clear form
        form.resetForm();
      },

      error: (error) => {
        console.error('Error sending message', error);

        // SHOW ERROR DIALOG
        this.isSuccess = false;
        this.showDialog = true;
      }
    });
}

closeDialog() {
  this.showDialog = false;
}
}