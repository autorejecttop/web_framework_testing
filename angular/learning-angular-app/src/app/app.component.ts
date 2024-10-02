import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ResetButtonComponent } from './reset-button/reset-button.component';
import { ExpandablePanelComponent } from './expandable-panel/expandable-panel.component';
import { MyCompComponent } from './my-comp/my-comp.component';
import { CustomCardComponent } from './custom-card/custom-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ResetButtonComponent,
    ExpandablePanelComponent,
    MyCompComponent,
    CustomCardComponent,
  ],
  // templateUrl: './app.component.html',
  // styleUrl: './app.component.scss'
  template: `
    <!-- <button lol="lol" type="reset" [buttonPadding]="1" title="undefined">
      bruh wtf
    </button> -->
    <!-- <app-expandable-panel (panelClosed)="savePanelState()" /> -->
    <!-- <app-my-comp (nameChange)="showNewName($event)" /> -->
    <app-custom-card>
      <h3 ngProjectAs="card-title">Hello</h3>
      <p>Welcome to the example</p>
    </app-custom-card>
  `,
})
export class AppComponent {
  title = 'learning-angular-app';

  savePanelState() {
    console.log('Panel closed');
  }

  showNewName(newName: string) {
    console.log(newName);
  }
}
