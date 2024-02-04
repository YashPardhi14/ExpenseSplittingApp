import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UsersComponent } from './users/users.component';

import { GroupsComponent } from './groups/groups.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseSummaryComponent } from './expense-summary/expense-summary.component';
import { AddnewExpenseComponent } from './addnew-expense/addnew-expense.component';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,UsersComponent,GroupsComponent,ExpensesComponent,ExpenseSummaryComponent,AddnewExpenseComponent,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'splittingApp';
}
