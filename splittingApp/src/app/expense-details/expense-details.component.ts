import { Component, Input, input } from '@angular/core';
import { Groups } from '../groups';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { Expenses } from '../expenses';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-expense-details',
  standalone: true,
  imports: [MatCardModule,CommonModule,MatButtonModule],
  templateUrl: './expense-details.component.html',
  styleUrl: './expense-details.component.css'
})
export class ExpenseDetailsComponent {
  showExpense:boolean=false;

  @Input()
  group!: Groups;

  @Input()allExpense!:Expenses[];

  filteredExpensesByGroupId:Expenses[]|undefined;



  filterTheGroupByGroupId(id:number){
    this.filteredExpensesByGroupId=this.allExpense?.filter(expense=>expense.user.group.id===id);
    this.showExpense=!this.showExpense;
  }

  hideExpenses(){
    this.filteredExpensesByGroupId=undefined;
    this.showExpense=!this.showExpense;

  }





}
