import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UploadComponent } from './pages/upload/upload.component';


const routes: Routes = [

  {path: '', redirectTo: 'pages/home', pathMatch: 'full' },
  {path: 'pages/home', component: HomeComponent},
  {path: 'pages/login', component: LoginComponent},
  {path: 'pages/register', component: RegisterComponent},
  {path: 'pages/upload', component: UploadComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
