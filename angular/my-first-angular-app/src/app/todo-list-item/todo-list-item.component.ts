import { Component } from '@angular/core';

@Component({
  selector: 'todo-list-item',
  standalone: true,
  imports: [],
  template: ` <p>Title: {{ taskTitle }}</p> `,
  // templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss',
})
export class TodoListItemComponent {
  taskTitle = 'Read cup of coffee';
  isComplete = false;

  completeTask() {
    this.isComplete = true;
  }

  updateTitle(newTitle: string) {
    this.taskTitle = newTitle;
  }
}
