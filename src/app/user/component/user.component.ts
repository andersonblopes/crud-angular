import {Component} from '@angular/core';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {catchError, Observable, of} from 'rxjs';

import {User} from '../../shared/model/user';
import {UserService} from '../service/user.service';
import {ErrorDialogComponent} from 'src/app/shared/componenets/error-dialog/error-dialog.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatCardModule} from "@angular/material/card";
import {MatTableModule} from "@angular/material/table";
import {CommonModule} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  standalone: true,
  imports: [CommonModule, TranslateModule, MatDialogModule, MatProgressSpinnerModule, MatToolbarModule, MatCardModule, MatTableModule],
})
export class UserComponent {
  users$: Observable<User[]>;
  displayedColumns = ['name', 'email', 'createdAt'];

  constructor(private userService: UserService, public dialog: MatDialog) {
    this.users$ = this.userService.finAll().pipe(
      catchError((error) => {
        console.error(error);
        this.onError("Request failed")
        return of([]);
      })
    );
  }

  onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }
}
