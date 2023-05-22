import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/shared/model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  finAll(): User[] {
    return [
      {
        id: '1',
        name: 'Anderson',
        email: 'anderson@email.com',
        createdAt: new Date(),
      },
      {
        id: '2',
        name: 'Helena',
        email: 'helena@email.com',
        createdAt: new Date(),
      },
      {
        id: '3',
        name: 'Elaine',
        email: 'elaine@email.com',
        createdAt: new Date(),
      },
    ];
  }
}
