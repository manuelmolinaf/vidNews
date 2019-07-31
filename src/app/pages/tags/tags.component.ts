import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import { DbService } from 'src/app/services/db.service';
import { Observable } from 'rxjs';
import { Video } from '../../models/video.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  videos: Observable<Video[]>;

  constructor(private db: DbService, private auth: AuthService, private router: Router) {

    this.videos = this.db.getVideos();

  }

  ngOnInit() {
  }

  toTagResult(tag: string) {

    this.router.navigateByUrl('pages/tag-result/' + tag);

  }

}
