import { Repo } from './../../classes/repo';
import { Component, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/services/github-api.service';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  username;
  repos;
  constructor(private github: GithubApiService) { }

  ngOnInit() {
    this.username = history.state.data.username;
    this.getRepos();
  }
  getRepos(){
    this.github.getUserRepos(this.username)
    .then((repos : Repo[]) => this.repos = repos);
  }

}
