import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from  '@angular/common/http'; 

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class RegisterUsersRestClientService {

  API_URL = "https://grupo1-app-rest.herokuapp.com"

  constructor(private httpClient: HttpClient,
    private router: Router) { }


  register(username: String, password: String, first_name: String, last_name: String, email: String): Observable<any> {
    var obj = { username: username, password: password, first_name: first_name, last_name: last_name, email: email }
    return of(this.httpClient.post(this.API_URL + '/registerUser', JSON.stringify(obj), httpOptions).subscribe((data: Response) => {
      if (data[0].fields.username == username) {
        this.router.navigate(['/gallery']);
      }
    }));
  }

}
