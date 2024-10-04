import { Component } from '@angular/core';

@Component({
  selector: 'app-adding-event-listeners',
  standalone: true,
  imports: [],
  template: `
    <input type="text" (keyup.enter)="updateField()" />
    <input type="text" (keyup.shift.enter)="updateField()" />
  `,
  styles: ``,
})
export class AddingEventListenersComponent {
  updateField(): void {
    console.log('The user pressed enter in the text field.');
  }

  // This can be useful for handling keyboard events
  // consistently across different operating systems.
  // For example, when using the Alt key on MacOS
  // devices, the key property reports the key based
  // on the character already modified by the Alt key.
  // This means that a combination like Alt + S
  // reports a key value of 'ß'. The code property,
  // however, corresponds to the physical or virtual
  // button pressed rather than the character produced.
}
