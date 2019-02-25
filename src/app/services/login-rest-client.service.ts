import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class LoginRestClientService {

  constructor(private http: Http) { }

  authenticate(credentials: any): Observable<any> {

    return this.http.post("https://grupo1-app-rest.herokuapp.com/loginUser/", credentials).pipe(
      map(reponse => reponse.json())
    );
  }

}
