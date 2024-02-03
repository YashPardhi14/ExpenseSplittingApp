import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Groups } from '../groups';
import { GroupSummary } from '../group-summary';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-summary-card',
  standalone: true,
  imports: [CommonModule,MatCardModule,MatButtonModule],
  templateUrl: './summary-card.component.html',
  styleUrl: './summary-card.component.css'
})
export class SummaryCardComponent  {


  @Input()
  group!: Groups;

  
  getGroupExpenseSummary:GroupSummary|undefined;
  showSummary:boolean=false;
  
  constructor(private expenseService:ExpenseService){}
  
  

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
}
