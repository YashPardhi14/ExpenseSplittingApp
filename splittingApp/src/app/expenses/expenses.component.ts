import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Expenses } from '../expenses';
import { Groups } from '../groups';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ExpenseDetailsComponent } from '../expense-details/expense-details.component';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule,MatCardModule,KeyValuePipe,ExpenseDetailsComponent],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'

})
export class ExpensesComponent implements OnInit {

  allExpenseList:Expenses[] |undefined;
allGroups:Groups[] | undefined;

filteredExpensesByGroupId:Expenses[]|undefined;
showExpense:boolean=false;

constructor(private expenseService:ExpenseService){}

  ngOnInit() {
   this.getAllGroups();
   this.getAllExpenses();
  }


  getAllExpenses(){

    this.expenseService.fetchExpenses().subscribe(
      (expenseData:Expenses[])=>{
        this.allExpenseList=expenseData;
      }
    )

  }

  getAllGroups(){

    this.expenseService.fetchGroups().subscribe(
      (groupData:Groups[])=>{
this.allGroups=groupData;
      }
    )
  }

  filterTheGroupByGroupId(groupId:number):void{

    this.filteredExpensesByGroupId=this.allExpenseList?.filter(expense=>expense.user.group.id===groupId);
    this.showExpense=!this.showExpense;

  }


  


}
