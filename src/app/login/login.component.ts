import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginRestClientService } from '../services/login-rest-client.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private formBuilder: FormBuilder,
    private loginRestClientService: LoginRestClientService,
    private storageService: StorageService,
    private router: Router
  ) {
    this.storageService.isLogged = false;
  }

  ngOnInit() {
    this.storageService.isLogged = false;
    this.buildForm();
  }

  public buildForm() {
    this.loginForm = this.formBuilder.group({
      user: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }


  public submit(): void {
    const name = this.loginForm.get('user').value;
    const password = this.loginForm.get('password').value;
    const credentials = { "login": name, "password": password };
    this.loginRestClientService.authenticate(credentials).subscribe(response => {
      console.log(response);
      this.storageService.userLogged = response;
      this.storageService.isLogged = true;
      this.router.navigate(['gallery']);
    }, error => {
      console.log(error);
      alert("Usuario o Password invalido");
      this.loginForm.reset();
    }
    )

  }
}
