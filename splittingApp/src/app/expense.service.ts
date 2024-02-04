import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, of } from 'rxjs';
import { Groups } from './groups';
import { Expenses } from './expenses';
import { GroupSummary } from './group-summary';
import { NewGroup } from './new-group';
import { NewUser } from './new-user';
import { NewExpense } from './new-expense';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

USER_API="http://localhost:8080/api/users";

GROUP_API="http://localhost:8080/api/groups";

EXPENSE_API="http://localhost:8080/api/expenses";

GROUP_SUMMAR_API="http://localhost:8080/api/group/summary";



fetchUsers(): Observable<Users[]> {
  return this.http.get<Users[]>(this.USER_API)
    .pipe(
      catchError(error => {
        console.error('Error fetching users:', error);
        return of([]); // Return an empty array on error
      })
    );
}

fetchGroups():Observable<Groups[]>{


  return this.http.get<Groups[]>(this.GROUP_API)
  .pipe(
    catchError(error=>{
      console.log('Error fetching groups:',error);
      return of([]);
      
    })
  )

}

fetchExpenses(): Observable<Expenses[]> {
  
  return this.http.get<Expenses[]>(this.EXPENSE_API)
    .pipe(
      catchError(error => {
        console.error('Error fetching expenses:', error);
        return of([]);
      })
    );
}

fetchGroupSummary(id:number):Observable<GroupSummary>{

  return this.http.get<GroupSummary>(`${this.GROUP_SUMMAR_API}/${id}`)
  .pipe(
    catchError(error=>{
      console.log('Error in fetching the Group expense summary',error);
      return of();
    })
  )

}

createNewGroup(newGroupData: NewGroup): Observable<any> {
  return this.http.post<any>(this.GROUP_API, newGroupData);
}

addMemberToGrup(newMember:NewUser):Observable<any>{

  return this.http.post<any>(this.USER_API,newMember);
}
addNewExpense(expense: NewExpense): Observable<any> {
  return this.http.post<any>(this.EXPENSE_API, expense); 
}



}
