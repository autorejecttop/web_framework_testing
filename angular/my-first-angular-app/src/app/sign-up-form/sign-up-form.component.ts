import { Component } from '@angular/core';

@Component({
  selector: 'sign-up-form',
  standalone: true,
  imports: [],
  template: `
    <button type="submit" [disabled]="formIsInvalid">Submit</button>
  `,
  // templateUrl: './sign-up-form.component.html',
  styleUrl: './sign-up-form.component.scss',
})
export class SignUpFormComponent {
  formIsInvalid = true;
}
