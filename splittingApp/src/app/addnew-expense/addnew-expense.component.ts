import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Users } from '../users';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { Groups } from '../groups';
import { ExpenseService } from '../expense.service';

import { MatSnackBar, MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition, MatSnackBarModule } from '@angular/material/snack-bar';
import { NewExpense } from '../new-expense';

@Component({
  selector: 'app-addnew-expense',
  standalone: true,
  imports: [CommonModule,MatSnackBarModule,ReactiveFormsModule,MatCardModule,MatFormFieldModule,MatInputModule,MatSelectModule,MatButtonModule],
  templateUrl: './addnew-expense.component.html',
  styleUrl: './addnew-expense.component.css'
})
export class AddnewExpenseComponent implements OnInit{
  
  showForm:boolean=false;
  groups!:Groups[];
  users: Users[] = [];
  filterUsers:Users[]|undefined;
  expenseForm:FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private expenseService:ExpenseService,private fb: FormBuilder,private snackBar: MatSnackBar){
    this.expenseForm = new FormGroup({
      userId: new FormControl('', Validators.required),
      groupId: new FormControl('', Validators.required),
      paid: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
    });
  }
  ngOnInit() {
    this.getAllGroups();
    this.getAllUsers()
  }

  getAllUsers(){
    this.expenseService.fetchUsers().subscribe(
      (userData:Users[])=>{
        this.users =userData;
      },error=>console.log(error)
      
    )
  }

  getAllGroups(){

    this.expenseService.fetchGroups().subscribe(
      (groupData:Groups[])=>{
        this.groups =groupData;
      },error=>console.log(error)
      
    )
    

  }

  onGroupSelected(groupId:number){

    this.filterUsers=this.users.filter(data=>data.group.id===groupId)
    this.expenseForm.patchValue({groupId});
    this.formVisibility();
  
  }

  formVisibility(){
    this.showForm=!this.showForm;
  }

  onSubmit(){
    if (this.expenseForm.invalid) {
      return;
    }else{
const expenseData:NewExpense=this.expenseForm.value;

this.expenseService.addNewExpense(expenseData).subscribe(

  ()=>{this.expenseForm.reset();
    this.snackBar.open('Expense added successfully!', 'Success');
    this.formVisibility();
   },
  (error)=>{

  }
)

    }

}
}