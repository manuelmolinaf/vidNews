import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { Video } from '../models/video.model';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DbService {
  private uploadTask: firebase.storage.UploadTask;
  public imgObs: BehaviorSubject<string>;

  videoCollectionRef: AngularFirestoreCollection<Video>;
  videos: Observable<Video[]>;


  constructor(private afs: AngularFirestore) {
    this.imgObs = new BehaviorSubject(null);

    this.videoCollectionRef = this.afs.collection<Video>('videos');
    this.videos = this.videoCollectionRef.valueChanges();
  }

  pushUpload(name: string, file: any) {
    const storageRef =  firebase.storage().ref();
    this.uploadTask = storageRef.child(`${name}`).put(file);

    this.uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) => {
      },
      (error) => {
        console.log(error);
         },
      () => {
        storageRef.child(`${name}`).getDownloadURL().then((url) => {
          this.imgObs.next(url);
        });
      });
  }

  getVideoById(id: string) {
    return this.afs.collection('videos').doc(id).snapshotChanges();
  }

  addVideo(video: Video) {

    const data: any = {
      tags: video.tags,
      description: video.description,
      url: video.url,
      title: video.title
    };

    return new Promise<any>((resolve, reject) => {
      this.afs
          .collection('videos')
          .add(data)
          .then(res => {
          }, err => reject(err));
    });
  }

  getVideos() {
    return this.videos;
  }
}
