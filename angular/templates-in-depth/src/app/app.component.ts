import { NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AddingEventListenersComponent } from './adding-event-listeners/adding-event-listeners.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { PipesComponent } from './pipes/pipes.component';
import { NgContentComponent } from './ng-content/ng-content.component';
import { NgTemplateComponent } from './ng-template/ng-template.component';
import { DeferComponent } from './defer/defer.component';
import { WhitespacesComponent } from './whitespaces/whitespaces.component';

@Component({
  selector: 'app-root',
  // preserveWhitespaces: true,
  standalone: true,
  imports: [
    RouterOutlet,
    // NgOptimizedImage,
    // UserProfileComponent,
    // AddingEventListenersComponent,
    // TwoWayBindingComponent,
    // ControlFlowComponent,
    // PipesComponent,
    // NgContentComponent,
    NgTemplateComponent,
    DeferComponent,
    WhitespacesComponent,
  ],
  // templateUrl: './app.component.html',
  template: `
    <!-- <p>Your color preference is {{ theme }}.</p>
    <button style="display: block;" [disabled]="!isFormValid">Save</button> -->
    <!-- <my-listbox [value]="mySelection" /> -->
    <!-- <img
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
    <hr /> -->
    <!-- <app-user-profile /> -->
    <!-- <app-adding-event-listeners /> -->

    <!-- <h1>Counter: {{ initialCount }}</h1>
    <app-two-way-binding [(count)]="initialCount" /> -->

    <!-- <app-control-flow /> -->

    <!-- <app-pipes /> -->

    <!-- <button baseButton>Lol</button> -->

    <!-- <app-ng-template /> -->

    <!-- <app-defer /> -->

    <app-whitespaces />
  `,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // title = 'templates-in-depth';
  // theme = Math.random() > 0.5 ? 'dark' : 'light';
  // isFormValid = Math.random() > 0.5 ? true : false;
  // mySelection = Math.random() > 0.5 ? 'a' : 'b';
  // profilePhotoUrl = 'https://picsum.photos/200';
  // listRole = '';
  // firstName = 'Rafli';
  // objectType = 'database';

  // ngOnInit(): void {
  //   console.log(this.isFormValid);
  // }

  initialCount = 10;
}
