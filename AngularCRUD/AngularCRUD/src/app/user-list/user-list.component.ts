import { Component, ViewChild, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NavigationExtras, Router } from '@angular/router';
import { UserArrrayService } from '../user-arrray.service';
export interface UsersContract {
  id: number,
  name: string;
  gender: string;
  team: string;
  hobby: string[];
  dob: Date;
  created_at: Date;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   { id: 1, name: "Mg Mg", gender: "Male", team: "PHP", hobby: "Reading", dob: "1/3/2020", created_at: new Date() },
//   { id: 2, name: "Aung Aung", gender: "Male", team: "PHP", hobby: "Gaming", dob: "1/3/2020", created_at: new Date() },
//   { id: 3, name: "Ma Ma", gender: "Female", team: "Java", hobby: "Eating", dob: "1/3/2020", created_at: new Date() },
// ];

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private router: Router, private users: UserArrrayService) { }

  usersList: UsersContract[] = this.users.getUsers();

  displayedColumns: string[] = ['name', 'gender', 'team', 'hobby', 'dob', 'created_at', 'modification'];
  dataSource = new MatTableDataSource(this.usersList);

  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  ngOnInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    if (sessionStorage.getItem("email") == null) {
      this.router.navigate(["logout"]);
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEdit(user: UsersContract) {

    const userList: NavigationExtras = {
      state: {
        name: user.name,
        gender: user.gender,
        team: user.team,
      }
    };
    this.router.navigate(["/register", user]);
    console.log(user);
  }
}
