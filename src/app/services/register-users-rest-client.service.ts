import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class RegisterUsersRestClientService {

  constructor(private http: Http) { }

  register(user: any): Observable<any> {
    return this.http.post("https://grupo1-app-rest.herokuapp.com/registerUser/", user).pipe(map(response => { }));
  }

}
