import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, first, tap } from 'rxjs';
import { User } from 'src/app/shared/model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private readonly API = '/assets/user.json';

  constructor(private http: HttpClient) {}

  finAll(): Observable<User[]> {
    return this.http.get<User[]>(this.API).pipe(
      first(), // close connection
      tap(users => console.log(users))
    );
  }
}
