import { Component, OnInit } from '@angular/core';
import { IUser } from '../../common/interfaces/IUser';
import { UserService } from '../../common/services/user.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'email', 'username', 'actions'];
  dataSource!: MatTableDataSource<IUser>;
  data: Array<IUser> = [];

  constructor(private readonly userService: UserService){}

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
}
