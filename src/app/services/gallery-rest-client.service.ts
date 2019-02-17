import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class GalleryRestClientService {

  constructor(private http: Http) { }



  getAllAudiosGallery(): Observable<any> {
    return this.http.get("https://grupo1-app-rest.herokuapp.com/audios/").pipe(
      map(reponse => reponse.json())
    );
  }

  getAllVideosGallery(): Observable<any> {
    return this.http.get("https://grupo1-app-rest.herokuapp.com/videos/").pipe(
      map(reponse => reponse.json())
    );
  }

  getAllImagesGallery(): Observable<any> {
    return this.http.get("https://grupo1-app-rest.herokuapp.com/images/").pipe(
      map(reponse => reponse.json())
    );
  }

}
