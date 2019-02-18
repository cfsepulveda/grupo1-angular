import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class ImageRestClient {

  constructor(private http: Http) { }


  createImage(image: any): Observable<any> {
    return this.http.post("https://grupo1-app-rest.herokuapp.com/images/", image).pipe(map(response => { }));
  }


}

