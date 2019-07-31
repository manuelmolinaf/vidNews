import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {AuthService} from '../../services/auth.service';
import { DbService } from 'src/app/services/db.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: Array<any>;

  constructor(private db: DbService) {

    this.db.getVideos().subscribe(res => {

      this.videos = res;

    });

   }

  ngOnInit() {
  }

}
