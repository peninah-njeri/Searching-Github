import { User } from './classes/user';
import { GithubApiService } from './services/github-api.service';
import { Component, OnInit } from '@angular/core';
import { Repo } from './classes/repo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username = "peninah-njeri";
  user: User;
  repos : Repo[];
  constructor(private github: GithubApiService){

  }
  ngOnInit(){
    this.github.getUser(this.username)
    .then((user:User) => {
      this.user = user
      console.log(user);
    })

    this.github.getUserRepos(this.username)
    .then((repos : Repo[]) => this.repos = repos);
  }



}
