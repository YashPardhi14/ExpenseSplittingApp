import { Component, OnInit } from '@angular/core';
import { Groups } from '../groups';
import { ExpenseService } from '../expense.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { GroupSummary } from '../group-summary';
import { MatButtonModule } from '@angular/material/button';
import { SummaryCardComponent } from '../summary-card/summary-card.component';

@Component({
  selector: 'app-expense-summary',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule,SummaryCardComponent],
  templateUrl: './expense-summary.component.html',
  styleUrl: './expense-summary.component.css'
})
export class ExpenseSummaryComponent implements OnInit {


 
  allGroups:Groups[] | undefined;
  getGroupExpenseSummary:GroupSummary|undefined;
  showSummary:boolean=false;
  
  constructor(private expenseService:ExpenseService){}
  
    ngOnInit() {
     this.getAllGroups();
     
    }

    showSummarryOfGroup(id:number){
      this.showSummary=!this.showSummary;
      this.expenseService.fetchGroupSummary(id).subscribe(
        (summaryData:GroupSummary)=>{this.getGroupExpenseSummary=summaryData;
        console.log(summaryData);
        
        
        }
      )

    }

    hideSummary(){
      this.showSummary=!this.showSummary;
      this.getGroupExpenseSummary=undefined;
    }



  getAllGroups(){

    this.expenseService.fetchGroups().subscribe(
      (groupData:Groups[])=>{
this.allGroups=groupData;
      }
    )
  }

}
