import { Component, OnInit } from '@angular/core';
import { Groups } from '../groups';
import { ExpenseService } from '../expense.service';
import { GroupCardComponent } from '../group-card/group-card.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewGroup } from '../new-group';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {  Router, RouterLink, RouterModule } from '@angular/router';


@Component({
  selector: 'app-groups',
  standalone: true,
  imports: [GroupCardComponent,MatInputModule,MatFormFieldModule,MatToolbarModule,CommonModule,MatButtonModule,ReactiveFormsModule,MatCardModule,RouterLink,RouterModule],
  templateUrl: './groups.component.html',
  styleUrl: './groups.component.css'
})
export class GroupsComponent implements OnInit {
  groups: Groups[] = [];
  showForm:boolean=false;
  groupForm: FormGroup;
  constructor(private expenseService: ExpenseService,private fb: FormBuilder,private router:Router) {

    this.groupForm = this.fb.group({
      groupName: ['', Validators.required]
    });
  }

  ngOnInit() {
    
      this.expenseService.fetchGroups().subscribe(
        (data:Groups[])=>{
          this.groups=data;
        }
      )

}

onSubmit() {
  const newGroupData: NewGroup = this.groupForm.value;
  this.expenseService.createNewGroup(newGroupData)
    .subscribe(() => {
     console.log("group created succesfully!!!!");
     this.router.navigate(['/view-members']);
     
     
    }, error => {
      // Handle any errors
      console.error(error);
    });
   this.showNewGroupForm();
  
}
showNewGroupForm(){
  this.showForm=!this.showForm;
}

}
