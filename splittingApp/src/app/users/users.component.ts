import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../expense.service';
import { Users } from '../users';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from '../user-card/user-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {  ReactiveFormsModule,FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Groups } from '../groups';
import { NewUser } from '../new-user';
import { RouterLink,Router,RouterModule} from '@angular/router';



@Component({
  selector: 'app-users',
  standalone: true,
  imports: [HttpClientModule,CommonModule,RouterModule,UserCardComponent,MatToolbarModule,MatButtonModule,ReactiveFormsModule,MatSelectModule
    ,MatFormFieldModule,MatCardModule,MatInputModule,RouterLink
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  userForm!: FormGroup;
  users: Users[] = [];
  showForm: boolean=false;
  groups: Groups[] = [];

  constructor(private expenseService: ExpenseService,private fb: FormBuilder,private router:Router) {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      groupId: ['',Validators.required] // No validator here, as it's populated from the dropdown
    });

  }

  ngOnInit() {
    this.fetchUsers();
    this.fetchGroup();
  }
  fetchGroup() {
    this.expenseService.fetchGroups().subscribe(
      (data:Groups[])=>{
        this.groups=data;
      }
    )
  }

  fetchUsers() {
    this.expenseService.fetchUsers()
      .subscribe(users => {
        this.users = users;
      });
  }


  showUserFrom(){
    this.showForm=!this.showForm;
  }
  onSubmit() {
    const userGroupData: NewUser = this.userForm.value;
    this.expenseService.addMemberToGrup(userGroupData)
      .subscribe(() => {
        // Handle successful addition
        console.log('User added successfully!');
        this.router.navigate(['/view-add-expenseForm'])
        // Clear form, display success message, etc.
      }, error => {
        // Handle error
        console.error('Error adding user:', error);
        // Display error message to the user
      });
  }
}
