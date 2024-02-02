import { Component, OnInit } from '@angular/core';
import { Groups } from '../groups';
import { ExpenseService } from '../expense.service';
import { GroupCardComponent } from '../group-card/group-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [GroupCardComponent,MatToolbarModule,CommonModule],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent implements OnInit {
  groups: Groups[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    
      this.expenseService.fetchGroups().subscribe(
        (data:Groups[])=>{
          this.groups=data;
        }
      )

}


}
