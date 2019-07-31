import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
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

  videos: Array<any>;

  constructor(private db: DbService) {

    db.getVideos().subscribe((vids) => {
      this.videos = vids;
    });

   }

  ngOnInit() {
  }

}
