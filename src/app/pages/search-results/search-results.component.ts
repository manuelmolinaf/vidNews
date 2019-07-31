import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../models/video.model';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

  keyword: string;
  private sub: any;

  videos: Observable<Video[]>;

  constructor(private route: ActivatedRoute, private router: Router, private db: DbService) { 

    this.videos = this.db.getVideos();
  }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {

      this.keyword = params.keyword;

    });
  }

  find(title: string) {
    let key = this.keyword;

    key = key.toLowerCase();


    if (title.toLowerCase().includes(key)) {
      return true;
    } else {

      return false;
    }
  }

}
