import { Component } from '@angular/core';

@Component({
  selector: 'user-controls',
  standalone: true,
  imports: [],
  template: `
    @if (isAdmin) {
    <button>Erase database</button>
    } @else {
    <p>You are not authorized.</p>
    }
  `,
  // templateUrl: './user-controls.component.html',
  styleUrl: './user-controls.component.scss',
})
export class UserControlsComponent {
  isAdmin = Math.random() > 0.5;
}
