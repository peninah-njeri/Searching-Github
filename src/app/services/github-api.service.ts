import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  key = environment.apiKey;
  url = "https://api.github.com/";

  constructor(private http: HttpClient) { }

  getUser(username){
   return this.http.get(`${this.url}users/${username}?access_token=${this.key}`).toPromise()
  }
  getUserRepos(username){
    return this.http.get(`${this.url}users/${username}/repos?access_token=${this.key}`).toPromise()
   }
}
