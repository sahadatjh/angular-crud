import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserRoutingModule } from './user-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { UserFormDialogComponent } from './user-form-dialog/user-form-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  providers: [
    FormControl
  ],
  declarations: [
    UsersListComponent, 
    UserFormDialogComponent
  ],
  imports: [
    UserRoutingModule,
    CommonModule,
    MatTableModule,
    MatIconModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ],
  exports: [],
})
export class UsersModule {}
