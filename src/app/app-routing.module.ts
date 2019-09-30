import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoComponent } from './components/repo/repo.component';


const routes: Routes = [
  { path: 'home', component : HomeComponent },
  { path : 'repo', component : RepoComponent },
  { path: '', redirectTo : 'home', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
