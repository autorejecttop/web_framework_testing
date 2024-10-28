import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ImageOptimizationComponent } from './image-optimization/image-optimization.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ImageOptimizationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'performance-in-depth';
}
