import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  template: `
    <ul [class]="listClasses">
      ...
    </ul>
    <section [class]="sectionClasses">...</section>
    <button [class]="buttonClasses">...</button>
    <ul class="list" [class]="listType" [class.expanded]="isExpanded">
      ...
    </ul>

    <section [style.display]="isExpanded ? 'block' : 'none'"></section>
    <section [style.height.px]="sectionHeightInPixels"></section>

    <ul [style]="listStyles">
      ...
    </ul>
    <section [style]="sectionStyles">...</section>
  `,
})
export class UserProfileComponent {
  listClasses = 'full-width outlined';
  sectionClasses = ['expandable', 'elevated'];
  buttonClasses = {
    highlighted: true,
    embiggened: false,
  };
  listType = 'box';
  isExpanded = true;
  sectionHeightInPixels = 16;
  listStyles = 'display: flex; padding: 8px';
  sectionStyles = {
    border: '1px solid black',
    'font-weight': 'bold',
  };
}
