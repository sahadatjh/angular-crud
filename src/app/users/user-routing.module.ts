import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UserFormDialogComponent } from './user-form-dialog/user-form-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    data: {
      primaryToolBarTitle: 'Users'
    }
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
