import {
  IMAGE_CONFIG,
  IMAGE_LOADER,
  ImageLoaderConfig,
  NgOptimizedImage,
  provideCloudflareLoader,
} from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-optimization',
  standalone: true,
  imports: [NgOptimizedImage],
  providers: [
    // provideCloudflareLoader(''),
    {
      provide: IMAGE_CONFIG,
      useValue: {
        placeholderResolution: 40,
      },
    },
    // {
    //   provide: IMAGE_LOADER,
    //   useValue: (config: ImageLoaderConfig) => {
    //     return `https://example.com/images?src=${config.src}&width=${config.width}`;
    //   },
    // },
  ],
  templateUrl: './image-optimization.component.html',
  styleUrl: './image-optimization.component.scss',
})
export class ImageOptimizationComponent {}
