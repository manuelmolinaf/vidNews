import { Component, OnInit } from '@angular/core';
import { DbService } from '../../services/db.service';
import { Video } from '../../models/video.model';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor(private db: DbService) { }

  ngOnInit() {
  }

  upload(description: string, tags: string, fileInput: any) {
    console.log(fileInput);
    const video = fileInput[0];

    console.log(tags);

    if (fileInput && description && tags){
      this.db.pushUpload(video.name, video);

      this.db.imgObs.subscribe((url) => {
        if (url) {
          console.log(tags);
          const vid = new Video(tags.split(','), description, url);
          this.db.addVideo(vid);
        }
      });
    }
  }


}
