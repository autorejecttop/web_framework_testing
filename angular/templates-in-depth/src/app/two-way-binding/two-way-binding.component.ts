import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way-binding',
  standalone: true,
  imports: [FormsModule],
  template: `
    <main>
      <!-- <h2>Hello {{ firstName }}!</h2>
      <input type="text" [(ngModel)]="firstName" /> -->
      <button (click)="updateCount(-1)">-</button>
      <span>{{ count }}</span>
      <button (click)="updateCount(+1)">+</button>
    </main>
  `,
  styles: ``,
})
export class TwoWayBindingComponent {
  // firstName = 'Ada';

  @Input() count: number = 0;
  @Output() countChange = new EventEmitter<number>();

  updateCount(amount: number): void {
    this.count += amount;
    this.countChange.emit(this.count);
  }
}
