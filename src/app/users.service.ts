import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Observable<any>;
  constructor(private http: HttpClient) { }

  getUsers(login: string) {
   return this.http.get(`https://api.github.com/search/users?q=${login}&sort=stars`)
   .pipe(
    catchError(this.handleError('getUsers', []))
  );;
  }
  getUser(login: string){
    return this.http.get(`https://api.github.com/users/${login}`)
    .pipe(
      catchError(this.handleError('getUser', []))
    );;
  }
  getRepos(login: string): Observable<any[]>{
    return this.http.get<any[]>(`https://api.github.com/users/${login}/repos`)
    .pipe(
      catchError(this.handleError('getRepos', []))
    );;
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
