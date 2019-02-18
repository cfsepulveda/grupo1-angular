import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class DetailsRestClient {

  constructor(private http: Http) { }

  getAllVideosClip(): Observable<any[]> {
    return this.http.get("https://grupo1-app-rest.herokuapp.com/clipVideo/").pipe(
      map(reponse => reponse.json())
    );
  }


  getAllAudiosClip(): Observable<any[]> {
    return this.http.get("https://grupo1-app-rest.herokuapp.com/clipAudio/").pipe(
      map(reponse => reponse.json())
    );
  }

  createVideoClip(videoClip: any): Observable<any> {
    return this.http.post("https://grupo1-app-rest.herokuapp.com/clipVideo/", videoClip).pipe(map(response => { }));
  }

  createImage(image: any): Observable<any> {
    return this.http.post("https://grupo1-app-rest.herokuapp.com/images/", image).pipe(map(response => { }));
  }

  createAudioClip(audioClip: any): Observable<any> {
    return this.http.post("https://grupo1-app-rest.herokuapp.com/clipAudio/", audioClip).pipe(map(response => { }));
  }

  getUsers(): Observable<any> {
    return this.http.get("https://grupo1-app-rest.herokuapp.com/registerUser/").pipe(
      map(reponse => reponse.json())
    );
  }


}

