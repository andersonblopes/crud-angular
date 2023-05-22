import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/modules/app-material.module';
import { UserComponent } from './component/user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, AppMaterialModule],
})
export class UserModule {}
