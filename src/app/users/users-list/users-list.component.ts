import { Component, OnInit } from '@angular/core';
import { IUser } from '../../common/interfaces/IUser';
import { UserService } from '../../common/services/user.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from '../user-form-dialog/user-form-dialog.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'username', 'actions'];
  dataSource!: MatTableDataSource<IUser>;
  data: Array<IUser> = [];

  constructor(private readonly userService: UserService,
              private readonly dialog: MatDialog,){
                console.log('\nUserListComponent------------>');
              }

  ngOnInit(): void {
    this.loadAll()
  }

  loadAll(){
    this.userService.getAll().subscribe(
      (response) => {
        this.data = response?.data;
        this.dataSource = new MatTableDataSource(this.data)
      },
      (error) => {
        console.log(error?.error?.msg);
        this.data = [];
      }
    )
  }

  onEditBtnClick(user: IUser){
    this.dialog.open(UserFormDialogComponent,{
      width: '500px',
      closeOnNavigation: true,
      disableClose: true,
      data: {
        title: `User ${user ? 'Edit': 'Create'} Form`,
        isEdit: true,
        user: user,
      }
    }).afterClosed().subscribe(response => {
      if (response?.isConfirmed) {
        console.log('\nDialog closed------------>');
      }
    })
  }
}
