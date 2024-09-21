import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [],
  template: ` <button [attr.data-test-id]="testId">Primary CTA</button> `,
  // templateUrl: './app-banner.component.html',
  styleUrl: './app-banner.component.scss',
})
export class AppBannerComponent {
  testId = 'main-cta';
}
