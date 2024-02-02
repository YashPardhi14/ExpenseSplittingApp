import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Users } from '../users';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule,CommonModule,UserCardComponent,MatToolbarModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
 
  users: Users[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit() {
    this.fetchUsers();
  }

  fetchUsers() {
    this.expenseService.fetchUsers()
      .subscribe(users => {
        this.users = users;
      });
  }


}
