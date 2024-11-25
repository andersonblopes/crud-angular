import {Routes} from '@angular/router';
import {UserComponent} from "./component/user.component";

export const USER_ROUTES: Routes = [
  {
    path: '',
    component: UserComponent,
    children: [
      {path: 'add', component: UserComponent},
      {path: 'edit/:localityId', component: UserComponent}
    ]
  }
]
