import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterUsersRestClientService } from '../services/register-users-rest-client.service';

@Component({
  selector: 'app-register-users',
  templateUrl: './register-users.component.html',
  styleUrls: ['./register-users.component.scss']
})
export class RegisterUsersComponent implements OnInit {

  private registerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private registerUsersRestClientService: RegisterUsersRestClientService,
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      username: new FormControl(),
      first_name: new FormControl(),
      last_name: new FormControl(),
      password: new FormControl(),
      email: new FormControl()
    });

  }

  register() {
    const username = this.registerForm.get('username').value; 
    const password = this.registerForm.get('password').value;
    const firstName = this.registerForm.get('first_name').value; 
    const lastName = this.registerForm.get('last_name').value;
    const email = this.registerForm.get('email').value;
    const user = {"username": username, "password": password, "firstname": firstName, "lastname": lastName, "email": email};
    this.registerUsersRestClientService.register(user)    
    this.goBack();
  }


  goBack(): void {
    this.location.back();
  }

}
