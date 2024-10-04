import { Component } from '@angular/core';

@Component({
  selector: 'app-control-flow',
  standalone: true,
  imports: [],
  template: `
    @if (user.profile.settings.startDate; as startDate) {
    <p>{{ startDate }}</p>
    } @for (item of items; track item.id; let idx = $index, e = $even) {
    <p>Item #{{ idx + 1 }}: {{ item.name }}</p>
    }

    <ul>
      @for (item of items; track item.id) {
      <li>{{ item.name }}</li>
      } @empty {
      <li aria-hidden="true">There are no items.</li>
      }
    </ul>

    @switch (userPermissions) { @case ('admin') {
    <p>You are an admin.</p>
    } @case ('reviewer') {
    <p>You are a reviewer.</p>
    } @case ('editor') {
    <p>You are an editor.</p>
    } @default {
    <p>You are a viewer.</p>
    } }
  `,
  styles: ``,
})
export class ControlFlowComponent {
  items = [
    {
      id: 1,
      name: 'One',
    },
    {
      id: 2,
      name: 'Two',
    },
    {
      id: 3,
      name: 'Three',
    },
    {
      id: 4,
      name: 'Four',
    },
    {
      id: 5,
      name: 'Five',
    },
    {
      id: 6,
      name: 'Six',
    },
    {
      id: 7,
      name: 'Seven',
    },
    {
      id: 8,
      name: 'Eight',
    },
    {
      id: 9,
      name: 'Nine',
    },
    {
      id: 10,
      name: 'Ten',
    },
  ];

  userPermissions = 'admin';

  user = {
    profile: {
      settings: {
        startDate: new Date(),
      },
    },
  };
}
