import {
  booleanAttribute,
  Component,
  Input,
  numberAttribute,
} from '@angular/core';

@Component({
  selector: 'button[type="reset"]',
  standalone: true,
  imports: [],
  template: `<span><ng-content /></span>`,
  inputs: ['lol'],
  styles: `
    span {
      color: red;
    }
  `,
})
export class ResetButtonComponent {
  @Input({
    required: true,
    transform: trimString,
  })
  title: string = 'Reset';

  @Input({
    transform: booleanAttribute,
  })
  disabled = false;

  @Input({
    alias: 'buttonPadding',
    transform: numberAttribute,
  })
  padding = 0;
}

function trimString(value: string | undefined) {
  value = value?.trim() ?? 'Reset';
  console.log(value);

  return value;
}
