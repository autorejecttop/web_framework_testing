import { Component, output } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  standalone: true,
  imports: [],
  template: ` <p>my-comp works!</p> `,
  styles: ``,
})
export class MyCompComponent {
  nameChange = output<string>();

  setNewName(newName: string) {
    this.nameChange.emit(newName);
  }

  ngOnInit() {
    this.setNewName('Lol');
  }
}
