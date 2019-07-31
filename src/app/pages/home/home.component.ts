import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { DbService } from 'src/app/services/db.service';
import { Observable } from 'rxjs';
import { Video } from '../../models/video.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: Observable<Video[]>;


  constructor(private db: DbService, private auth: AuthService) {

    this.videos = this.db.getVideos();


   }

  ngOnInit() {

  }

}
