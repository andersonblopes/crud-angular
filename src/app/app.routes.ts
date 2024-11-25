import {Routes} from "@angular/router";

export const APP_ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'users'},
  {
    path: 'users',
    loadChildren: () => import('./user/user.routes').then(m => m.USER_ROUTES)
  },
  {path: '**', redirectTo: '', pathMatch: 'full'}
];
