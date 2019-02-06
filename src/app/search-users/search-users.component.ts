import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';


@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
 res: any;
 items: any;
 searchQuery: string;
  constructor(private usersService: UsersService) { }

  getUsers(){
    this.usersService.getUsers(this.searchQuery)
    .subscribe((res) => {
      this.res = res;
      this.items = this.res.items.splice(0,20);
    },(err) => {
      console.log(err);
    });
  }
  ngOnInit() {

  }

}
