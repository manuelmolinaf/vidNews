import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {AuthService} from '../../services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: any;

  constructor(private auth: AuthService) { }

  ngOnInit() {

    this.auth.getUser().subscribe(res => {

      this.user = res.displayName;
    });
  }

}
