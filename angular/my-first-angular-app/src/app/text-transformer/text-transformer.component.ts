import { Component } from '@angular/core';

@Component({
  selector: 'text-transformer',
  standalone: true,
  imports: [],
  template: `
    <p>{{ announcement }}</p>
    <button (click)="transformText()">Abracadabra!</button>
    <input (keyup)="validateInput()" />
    <input (keydown)="updateInput()" />
    <button (click)="createUser($event)">Submit</button>
    <!-- <input onkeydown="updateInput()" /> -->
  `,
  // templateUrl: './text-transformer.component.html',
  styleUrl: './text-transformer.component.scss',
})
export class TextTransformerComponent {
  announcement = 'Hello again Angular!';

  transformText() {
    this.announcement = this.announcement.toUpperCase();
  }

  validateInput() {
    console.log('validateInput');
  }

  updateInput() {
    console.log('updateInput');
  }

  createUser(event: Event) {
    console.log(event);
  }
}
