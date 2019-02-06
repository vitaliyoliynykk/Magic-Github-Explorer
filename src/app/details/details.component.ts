import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  user: any;
  repos: any[];
  login:string;

   constructor(private usersService: UsersService,private route: ActivatedRoute,) {
    this.login = this.route.snapshot.paramMap.get('login');
    }
  
  getUser(){
    this.usersService.getUser(this.login)
    .subscribe((res) => {
      this.user = res;
    },(err) => {
      console.log(err);
    });
    }
  getRepos(){
    this.usersService.getRepos(this.login)
    .subscribe((res) => {
      this.repos = res;
      this.repos = this.repos.slice(0,4);
    }, (err) => {
      console.log(err);
    });
  }
    ngOnInit() {
      this.getUser();
      this.getRepos();
    }
}