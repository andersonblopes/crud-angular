import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ErrorDialogComponent } from './componenets/error-dialog/error-dialog.component';
import { AppMaterialModule } from './modules/app-material.module';

@NgModule({
  declarations: [ErrorDialogComponent],
  imports: [AppMaterialModule, CommonModule],
  exports: [ErrorDialogComponent],
})
export class SharedModule {}
