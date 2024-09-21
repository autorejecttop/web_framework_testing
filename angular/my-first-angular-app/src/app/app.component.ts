import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { AppBannerComponent } from './app-banner/app-banner.component';
import { UserControlsComponent } from './user-controls/user-controls.component';
import { IngredientListComponent } from './ingredient-list/ingredient-list.component';
import { TextTransformerComponent } from './text-transformer/text-transformer.component';
import { ReceiptComponent } from './receipt/receipt.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TodoListComponent,
    SignUpFormComponent,
    AppBannerComponent,
    UserControlsComponent,
    IngredientListComponent,
    TextTransformerComponent,
    ReceiptComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'my-first-angular-app';
}
