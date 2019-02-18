import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { LoginRestClientService } from '../services/login-rest-client.service';
import { StorageService } from '../services/storage.service';
import { Router } from '@angular/router';

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
    const credentials = { "user": name, "password": password };
    this.router.navigate(['gallery']);
    this.loginRestClientService.authenticate(credentials).subscribe(response => {
      this.storageService.isLogged = true;
    })
  }
}
