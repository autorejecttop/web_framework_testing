import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-card',
  standalone: true,
  imports: [],
  template: `
    <div class="card-shadow">
      <ng-content select="card-title"></ng-content>
      <div class="card-divider"></div>
      <ng-content />
    </div>
  `,
  styles: `
  .card-shadow {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }`,
})
export class CustomCardComponent {}
