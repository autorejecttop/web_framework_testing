import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResetButtonComponent } from './reset-button/reset-button.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ResetButtonComponent],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.scss'
  template: `
    <button lol="lol" type="reset" [buttonPadding]="1" title="undefined">
      bruh wtf
    </button>
  `,
})
export class AppComponent {
  title = 'learning-angular-app';
}
