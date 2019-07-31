import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../../services/auth.service';
import { DbService } from 'src/app/services/db.service';
import { Observable } from 'rxjs';
import { Video } from '../../models/video.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tag-result',
  templateUrl: './tag-result.component.html',
  styleUrls: ['./tag-result.component.css']
})
export class TagResultComponent implements OnInit {

  videos: Observable<Video[]>;

  tag: string;
  private sub: any;


  constructor(private db: DbService, private auth: AuthService, private router: Router, private route: ActivatedRoute) {

    this.videos = this.db.getVideos();
   }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {

      this.tag = params.tag;

    });
  }

  toTagResult(tag: string) {

    this.router.navigateByUrl('pages/tag-result/' + tag);

  }

  hasTag(tags: string[]) {

    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < tags.length; i++ ) {

      if (tags[i] === this.tag) {

        return true;
      }

     }

    return false;

  }

}
