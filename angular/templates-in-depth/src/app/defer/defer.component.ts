import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-defer',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './defer.component.html',
  styleUrl: './defer.component.scss',
})
export class DeferComponent {
  loading = false;

  constructor() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
    }, 2000);
  }
}
