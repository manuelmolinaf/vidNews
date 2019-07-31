import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UploadComponent } from './pages/upload/upload.component';
import { TagResultComponent } from './pages/tag-result/tag-result.component';
import { TagsComponent } from './pages/tags/tags.component';
import { SearchResultsComponent } from './pages/search-results/search-results.component';

const routes: Routes = [

  {path: '', redirectTo: 'pages/home', pathMatch: 'full' },
  {path: 'pages/home', component: HomeComponent},
  {path: 'pages/login', component: LoginComponent},
  {path: 'pages/register', component: RegisterComponent},
  {path: 'pages/upload', component: UploadComponent},
  {path: 'pages/tag-result/:tag', component: TagResultComponent},
  {path: 'pages/tags', component: TagsComponent},
  {path: 'pages/search-results/:keyword', component: SearchResultsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
