import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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
  selectFile:File;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private location: Location,
    private registerUsersRestClientService: RegisterUsersRestClientService,
  ) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      login: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      photo: new FormControl(),
    });

  };

  onFileSelected(event) {
    console.log(event);
    this.selectFile = event.target.files[0]; 
  };

  register() {
    const login = this.registerForm.get('login').value; 
    const password = this.registerForm.get('password').value;
    const name = this.registerForm.get('name').value; 
    const lastname = this.registerForm.get('lastname').value;
    const email = this.registerForm.get('email').value;
    const city = this.registerForm.get('city').value;
    const country = this.registerForm.get('country').value;
    var photo = this.registerForm.get('photo').value;
    const photoFile = this.selectFile;
    if(photoFile != null){
      photo = photoFile;
    }
    const user = {'login': login, 'password': password,'name': name, 'lastname': lastname, 'email': email, 'photo':photo, 'city':city, 'country':country};
    this.registerUsersRestClientService.register(user).subscribe(response => {
      console.log(response);
      this.router.navigate(['gallery']);
    }, error => {
      console.log(error);
      alert("Formulario Invalido");
      this.registerForm.reset();
    }
    );
  };

  goBack(): void {
    this.location.back();
  };

}
