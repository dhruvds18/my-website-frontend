import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dialogue-box',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialogue-box.html',
})
export class DialogueBox {

  @Input() showDialog = false;
  @Input() isSuccess = false;

  @Output() dialogClosed = new EventEmitter<void>();

  closeDialog() {
    this.dialogClosed.emit();
  }
}