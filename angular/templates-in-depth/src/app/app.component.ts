import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgOptimizedImage, UserProfileComponent],
  // templateUrl: './app.component.html',
  template: `
    <p>Your color preference is {{ theme }}.</p>
    <button style="display: block;" [disabled]="!isFormValid">Save</button>
    <!-- <my-listbox [value]="mySelection" /> -->
    <img
      [ngSrc]="profilePhotoUrl"
      alt="The current user's profile photo"
      width="200"
      height="200"
      priority
    />
    <ul [attr.role]="listRole"></ul>
    <img src="{{ profilePhotoUrl }}" alt="Profile photo of {{ firstName }} " />
    <button
      [style.display]="'block'"
      attr.aria-label="Save changes to {{ objectType }}"
    >
      Save changes
    </button>
    <hr />
    <app-user-profile />
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'templates-in-depth';
  theme = Math.random() > 0.5 ? 'dark' : 'light';
  isFormValid = Math.random() > 0.5 ? true : false;
  // mySelection = Math.random() > 0.5 ? 'a' : 'b';
  profilePhotoUrl = 'https://picsum.photos/200';
  listRole = '';
  firstName = 'Rafli';
  objectType = 'database';

  ngOnInit(): void {
    console.log(this.isFormValid);
  }
}
