import { Component } from '@angular/core';

@Component({
  selector: 'ingredient-list',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for (ingredient of ingredientList; track ingredient.name) {
      <li>{{ ingredient.quantity }} - {{ ingredient.name }}</li>
      }
    </ul>
  `,
  // templateUrl: './ingredient-list.component.html',
  styleUrl: './ingredient-list.component.scss',
})
export class IngredientListComponent {
  ingredientList = [
    { name: 'noodles', quantity: 1 },
    { name: 'miso broth', quantity: 1 },
    { name: 'egg', quantity: 2 },
  ];
}
