import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class CategoryRestClientService {

  constructor(private http: Http) { }



  getMediaTypes(): Observable<any> {
    return this.http.get("https://grupo1-app-rest.herokuapp.com/mediatypes/").pipe(
      map(reponse => reponse.json())
    );
  }
  getCategoriesTypes(): Observable<any> {
    return this.http.get("https://grupo1-app-rest.herokuapp.com/categories/").pipe(
      map(reponse => reponse.json())
    );
  }



 

}
