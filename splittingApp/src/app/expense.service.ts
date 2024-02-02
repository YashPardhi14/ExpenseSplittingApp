import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, map, of } from 'rxjs';
import { Groups } from './groups';


@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http: HttpClient) { }

USER_API="http://localhost:8080/api/users";

GROUP_API="http://localhost:8080/api/groups";



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

}