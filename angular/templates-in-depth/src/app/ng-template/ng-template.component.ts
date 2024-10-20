import { NgTemplateOutlet } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.scss',
})
export class NgTemplateComponent {
  count: number = 0;

  handleClick() {
    this.count++;
  }
}
