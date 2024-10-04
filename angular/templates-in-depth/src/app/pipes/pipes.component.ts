import {
  CurrencyPipe,
  DatePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [TitleCasePipe, DatePipe, CurrencyPipe, UpperCasePipe],
  template: `
    <main>
      <h1>
        Purchases from {{ company | titlecase }} on {{ purchasedOn | date }}
      </h1>

      <p>Total: {{ amount | currency }}</p>

      <p>The event will occur on {{ purchasedOn | date | uppercase }}.</p>
      <p>
        The event will occur at
        {{ purchasedOn | date : 'hh:mm' : 'UTC' | uppercase }}.
      </p>
    </main>
  `,
  styles: ``,
})
export class PipesComponent {
  amount = 123.45;
  company = 'acme corporation';
  purchasedOn = '2024-07-08';
}
