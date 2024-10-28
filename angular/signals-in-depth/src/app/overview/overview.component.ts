import {
  Component,
  computed,
  effect,
  OnChanges,
  OnInit,
  signal,
  SimpleChanges,
  untracked,
} from '@angular/core';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss',
})
export class OverviewComponent {
  readonly count = signal(0);
  readonly doubleCount = computed(() => this.count() * 2);
  readonly currentUser = signal('Agung');

  protected test = '';

  private loggingEffect = effect((onCleanup) => {
    console.log(`The count is: ${this.count()}`);

    onCleanup(() => {
      console.log('Effect destroyed');
    });
  });

  private logUser = effect(() => {
    // console.log(
    //   `User set to ${this.currentUser()} and the counter is ${this.count()}`
    // );

    console.log(
      `User set to ${this.currentUser()} and the counter is ${untracked(
        this.count
      )}`
    );
  });
}
