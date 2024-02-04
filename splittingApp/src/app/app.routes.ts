import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { GroupsComponent } from './groups/groups.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpenseSummaryComponent } from './expense-summary/expense-summary.component';
import { AddnewExpenseComponent } from './addnew-expense/addnew-expense.component';

export const routes: Routes = [
{
    path:'',
    component:HomeComponent,
    children:[
        {
            path:'view-members',
            component:UsersComponent   
        },
        {
            path:'view-groups',
            component:GroupsComponent   
        },
        {
            path:'view-expenses',
            component:ExpensesComponent   
        },
        {
            path:'view-expense-summary',
            component:ExpenseSummaryComponent   
        },
        {
            path:'view-add-expenseForm',
            component:AddnewExpenseComponent
        }
    ]
},



];
