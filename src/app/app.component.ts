import { Component } from '@angular/core';
import {AuthService} from './services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vid-news';
  ad = 'admin';



  constructor(private router: Router, private auth: AuthService) {


   }

   toUpload() {
    this.router.navigateByUrl('pages/upload');
  }

  signOut() {
    this.auth.signOut();
  }


}

