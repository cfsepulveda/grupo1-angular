import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginRestClientService {

  constructor(private http: Http) { }

  authenticate(credentials): Observable<any> {
    return this.http.get("https://grupo1-app-rest.herokuapp.com/login/").pipe(
      map(reponse => reponse.json())
    );
  }
}
