import { Repo } from './../../classes/repo';
import { User } from './../../classes/user';
import { GithubApiService } from './../../services/github-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username = "peninah-njeri";
  user: User;

  constructor( private github : GithubApiService) { }

  ngOnInit() {
    this.getUser();
  }

  receiveUsername(username){
    this.username = username;
    this.getUser();
  }
  getUser(){
    this.github.getUser(this.username)
    .then((user:User) =>  this.user = user )
  }


}
