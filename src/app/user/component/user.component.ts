import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/model/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[] = [
    {
      id: '1',
      name: 'Anderson',
      email: 'anderson@email.com',
      createdAt: new Date(),
    },
    {
      id: '2',
      name: 'AHelena',
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
  displayedColumns = ['name', 'email', 'createdAt'];

  constructor() {}

  ngOnInit(): void {}
}
