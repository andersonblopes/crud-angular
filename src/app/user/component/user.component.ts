import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  displayedColumns = ['name', 'email', 'createdAt'];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.finAll();
  }
}
