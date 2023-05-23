import { Component, OnInit } from '@angular/core';

import { User } from '../../shared/model/user';
import { UserService } from '../service/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users$: Observable<User[]>;
  displayedColumns = ['name', 'email', 'createdAt'];

  constructor(private userService: UserService) {
    this.users$ = this.userService.finAll();
  }

  ngOnInit(): void {}
}
