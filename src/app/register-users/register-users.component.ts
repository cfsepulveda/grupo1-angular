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

  registerForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private registerUsersRestClientService: RegisterUsersRestClientService,
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      login: new FormControl(),
      name: new FormControl(),
      lastname: new FormControl(),
      password: new FormControl(),
      email: new FormControl()
    });

  }

  register() {
    const login = this.registerForm.get('login').value; 
    const password = this.registerForm.get('password').value;
    const name = this.registerForm.get('name').value; 
    const lastname = this.registerForm.get('lastname').value;
    const email = this.registerForm.get('email').value;
    const city = this.registerForm.get('city').value;
    const country = this.registerForm.get('country').value;
    const photo = this.registerForm.get('photo').value;
    const photoFile = this.registerForm.get('photoFile').value;
    const user = {'login': login, 'password': password,'name': name, 'lastname': lastname, 'email': email, 'photo':photo, 'city':city, 'country':country};
    const resultado = this.registerUsersRestClientService.register(user);
    console.log(resultado);
    this.goBack();
  }


  goBack(): void {
    this.location.back();
  }

}
